# Divyakumar A. Kotia — Personal Portfolio

A lightweight, responsive static portfolio hosted on GitHub Pages. No build tools, framework, database, or paid hosting are required.

## Website structure

- `index.html` — page structure and section content.
- `css/styles.css` — visual design and responsive layout.
- `js/content.js` — **main file for routine updates**: contact details and project cards.
- `js/app.js` — renders project cards and powers contact actions; edit only when changing functionality.
- `assets/` — resume PDF and future images.

## Routine updates

1. Open the repository `DivyaKotia/DivyaKotia.github.io` on GitHub.
2. Open `js/content.js` and click the pencil icon to edit.
3. Update the relevant values. To add a project, copy one project object and change its title, description, technologies, metric, metric label and URL.
4. Click **Commit changes**. GitHub Pages will publish the update automatically.

Keep quotation marks and commas intact in JavaScript. Use double quotes around text values. Do not edit `js/app.js` for ordinary project or email updates.

## Update your resume

Replace `assets/Divyakumar_Kotia_Resume.pdf` with the new PDF using the same filename. This keeps the existing resume link working. Alternatively, update the filename in the resume link in `index.html`.

## Contact behaviour

- **Compose in Gmail** opens a Gmail compose window addressed to the email in `js/content.js`.
- **Open email app** uses a standard `mailto:` link and depends on the visitor's configured email application.
- **Copy email address** copies the visible email address when browser permissions allow it.

## Deploy / publish

The repository should be `DivyaKotia.github.io`, with the site files at the repository root. In **Settings → Pages**, use **Deploy from a branch**, branch `main`, folder `/(root)`. GitHub Pages deploys committed changes automatically.

## Important content notes

- The SQL stock analysis project is ongoing. Do not describe return, volatility, drawdown or other advanced analyses as completed until they are finished.
- The EV Battery Price Index is employer/research work and belongs under professional experience, not among independent GitHub projects.
- Replace the profile-photo placeholder in `index.html` when a suitable photo is ready.
