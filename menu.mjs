import { getStore } from "@netlify/blobs";

const MEALS = ["breakfast", "lunch", "dinner"];
const clean = (s, n) => String(s || "").trim().slice(0, n);

export default async (req) => {
  const store = getStore("menu");

  if (req.method === "GET") {
    const data = (await store.get("current", { type: "json" })) || { note: "", meals: {} };
    return Response.json(data, { headers: { "cache-control": "no-store" } });
  }

  if (req.method === "POST") {
    let b;
    try { b = await req.json(); } catch { return new Response("Bad request", { status: 400 }); }
    const secret = process.env.OWNER_PASSWORD;
    if (!secret || b.password !== secret) return new Response("Wrong password", { status: 401 });
    if (b.action === "check") return Response.json({ ok: true });

    const meals = {};
    for (const m of MEALS) {
      const v = (b.meals && b.meals[m]) || {};
      meals[m] = {
        time: clean(v.time, 40),
        items: (Array.isArray(v.items) ? v.items : []).map((i) => clean(i, 60)).filter(Boolean).slice(0, 30),
      };
    }
    const data = { note: clean(b.note, 140), meals, updated: new Date().toISOString() };
    await store.setJSON("current", data);
    return Response.json({ ok: true, ...data });
  }
  return new Response("Method not allowed", { status: 405 });
};

export const config = { path: "/api/menu" };
