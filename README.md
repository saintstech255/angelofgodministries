# Angels of God Ministries International — Website Concept

> **Independent Website Concept — Prepared by Infinity Holdings.**
> Not yet commissioned or approved by the ministry. The emblem is a *proposed concept*, not the official logo.

Pure HTML5 + CSS3 + vanilla JavaScript. No build step, no backend, no dependencies (Google Fonts load online, with safe fallbacks offline).

## Files
```
index.html about.html prophet.html teachings.html watch.html
events.html prayer.html testimonies.html contact.html
styles.css        design system, per-page cosmic backgrounds
script.js         language switch, nav, filters, forms, media, stars, intro
translations.js   ALL English + Kiswahili text
config.js         YouTube IDs, contact details, social links
images/README.txt required images (exact filenames, ratios)
assets/logo/proposed-ministry-emblem.svg   replaceable emblem
```

## 1. Open locally
Double-click `index.html`. Or serve the folder: `python3 -m http.server 8000` and visit http://localhost:8000.

## 2. Replace images
Follow `images/README.txt`. Copy a JPG with the exact filename into `images/`; it appears automatically. Missing files simply show placeholders. Replace the logo by overwriting `assets/logo/proposed-ministry-emblem.svg` (SVG or keep the same filename).

## 3. Add YouTube videos
Open `config.js`, set `youtubeChannel`, and add videos from the **ministry's verified channel**:
```js
videos: [
  { id: "VIDEO_ID", category: "faith", featured: true,
    title: { en: "English title", sw: "Kichwa cha Kiswahili" } }
]
```
`id` is the 11-character code after `v=` in the YouTube URL. Categories: `growth, faith, prayer, kingdom, angels, living, bible`. With no videos, elegant placeholders show (no fake embeds). Videos load only when a visitor clicks play.

## 4. Change contact information
In `config.js` fill `whatsapp` (digits with country code, no `+`), `email`, `location`, and social URLs. Empty values stay as placeholders.

**Forms (static-site behaviour):** there is no server. When the form is submitted, the site opens WhatsApp (if `whatsapp` is set) or the visitor's email app (if `email` is set) with the message prefilled. If neither is set, the form says plainly that nothing was sent. Prayer requests are never stored or displayed. For automatic delivery later, connect a service such as Formspree or Netlify Forms and update `initForms()` in `script.js`.

## 5. Edit English / Swahili text
Open `translations.js`. Each line is `"key": ["English", "Kiswahili"]`. Edit the text inside quotes; keep keys. Pages use `data-i18n="key"`. To add text: add a key pair, then add `data-i18n="key"` to an element. The choice is remembered in `localStorage`; `?lang=sw` in a URL also works. Have a fluent Swahili speaker review wording before launch.

## 6. Remove the concept notice
After formal approval delete the `<div class="wrap concept" id="concept-notice">…</div>` block at the bottom of the footer on all 9 pages.

## 7. Deploy (free)
- **Netlify:** drag the project folder onto app.netlify.com/drop.
- **GitHub Pages:** push the files to a repository root → Settings → Pages → Deploy from branch (`main`, `/root`).
- **Cloudflare Pages:** connect the repo, framework "None", build command empty, output directory `/`.
All paths are relative, so no configuration is needed.

## Notes
- Welcome intro (~3.7 s, skippable) appears once per browser session on the homepage; skipped when "reduce motion" is on. Reduced motion also freezes stars, sweeps and transitions.
- Sample teachings are clearly labelled and not attributed to the Prophet. Mission/vision/values are labelled draft.
- No events, dates, statistics, testimonies, biography, contacts or video IDs were invented.
