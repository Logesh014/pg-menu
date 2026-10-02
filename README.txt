SRI PANCHAMUKI COLIVING PG - MENU SITE (Netlify)

HOW IT WORKS
- Everyone opens the site and sees the current menu.
- The menu stays exactly as posted until the PG owner changes it.
- Only someone who knows OWNER_PASSWORD can edit.

DEPLOY (about 10 minutes, free)
1. Make a free account at github.com and create a new repository (e.g. pg-menu).
   Upload ALL files from this folder (keep the folders: public/ and netlify/).
2. Make a free account at netlify.com -> "Add new site" -> "Import an existing project" -> GitHub -> pick the repo -> Deploy.
3. In Netlify: Site configuration -> Environment variables -> Add variable
      Key:   OWNER_PASSWORD
      Value: (a password only the PG owner knows)
   Then Deploys -> Trigger deploy -> Deploy site.
4. Open your site link. Tap "Owner login", enter the password, post the menu.
5. Optional: Site configuration -> Change site name -> e.g. sri-panchamuki-menu
   Share https://sri-panchamuki-menu.netlify.app in the PG WhatsApp group.

TO CHANGE THE PASSWORD: edit OWNER_PASSWORD in Netlify and redeploy.
