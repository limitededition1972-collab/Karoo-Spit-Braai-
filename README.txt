KAROO SPIT BRAAI PWA — V2

This folder contains the root-level files for a GitHub Pages Progressive Web App. The manifest has a distinct v2 app ID and the service worker uses a new cache name to avoid reusing the earlier installation record.

FILES
- index.html — app home, menu browser and event enquiry form
- styles.css — responsive mobile layout
- app.js — menu navigation, install button and WhatsApp enquiry
- manifest.json — Android install identity and icons
- service-worker.js — offline app shell
- icons/ — 192px and 512px app icons
- images/ — the official website logo and food photos used in the home screen and gallery

PUBLISHING
1. In the GitHub repository, replace the old files with the contents of this folder. Keep index.html, manifest.json, service-worker.js, app.js and styles.css at the repository root; keep the icons and images folders.
2. In GitHub, open Settings > Pages and ensure the main branch and /(root) are published.
3. Wait for the Pages deployment to finish. Open the published HTTPS address ending in /Karoo-Spit-Braai-/ on the phone, not the github.com repository page.
4. In Chrome, refresh the site. If the install button appears, tap it. Otherwise use Chrome menu > Install app or Add to Home screen.
5. The v2 manifest ID is intentionally different from the earlier generic ID. If the old ghost entry appears in your app drawer after v2 installs, remove that old entry.

ENQUIRIES
The app form prepares an enquiry in WhatsApp addressed to +27 74 641 1518. It does not store or send the details by itself; the customer reviews and sends the WhatsApp message. The contact section also links to the website's contact form and email.

MENU
Menu details and the supplied 2026 artwork are included. Prices and seasonal offers should be confirmed with the business when quoting.
