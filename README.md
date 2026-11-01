# FinUltra Website

Corporate website for **FinUltra** — cloud core banking for microfinance institutions, SACCOs, lenders and banks, with AI banking, WhatsApp banking, USSD, a Digital Field Application, mobile money and IT equipment supply.

Built with [Quasar](https://quasar.dev) (Vue 3 + Vite).

## Pages

| URL | Page |
|---|---|
| `/` | Home |
| `/platform` | Platform — modules (incl. AI, WhatsApp and USSD banking), integrations, plans, FAQ |
| `/solutions` | Solutions by institution type, quote builder, services, IT equipment catalogue |
| `/about-us` | Mission, vision, values, approach, office |
| `/contact-us` | Contact details and demo booking form |

`/our-services` (old URL) redirects to `/solutions`.

## Requirements

- [Node.js](https://nodejs.org) 20, 22 or 24 (LTS recommended)
- npm (comes with Node.js)

Check your versions:

```bash
node -v
npm -v
```

## Run it locally

1. Open a terminal in the project folder.
2. Install the dependencies (first time, or after pulling changes):

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open **http://localhost:9000** in your browser. The page reloads automatically when you save a file. Press `Ctrl + C` in the terminal to stop the server.

> If you see `'quasar' is not recognized` or a missing `@rollup/rollup-win32-x64-msvc` module, the installed packages came from another operating system. Run `npm install` again on your machine.

## Build for production

```bash
npm run build
```

The finished website is written to **`dist/spa`** (`index.html`, `assets/`, images and a hidden `.htaccess` file). Upload the *contents* of that folder to your web host.

To preview the production build on your machine before uploading:

```bash
npx quasar serve dist/spa --history
```

## Deploy to cPanel

1. Build the site: `npm run build`.
2. Zip the **contents** of `dist/spa` (not the folder itself). On Windows PowerShell:

   ```powershell
   Compress-Archive -Path dist\spa\* -DestinationPath finultra-site.zip -Force
   ```

3. In cPanel, open **File Manager** → **`public_html`** (or the folder for your domain/subdomain).
4. Back up or delete the old site files, then **Upload** `finultra-site.zip`, right-click it → **Extract**, and delete the zip. `index.html` must sit directly in `public_html`.
5. In File Manager **Settings**, tick **Show Hidden Files** and confirm `.htaccess` is present.

Alternatively, upload the contents of `dist/spa` into `public_html` with an FTP client such as FileZilla.

**Why `.htaccess` matters:** the site uses clean URLs (`/about-us`, `/platform`). `public/.htaccess` is copied into every build and tells Apache to serve `index.html` for those URLs, so refreshing a page or opening a shared link doesn't give a 404. It also stops browsers caching `index.html`, so new deploys appear immediately.

**Hosting in a subfolder** (e.g. `yourdomain.com/site/`): set `publicPath: '/site/'` under `build` in `quasar.config.js`, and in `public/.htaccess` change `RewriteBase /` to `RewriteBase /site/` and the last rule to `/site/index.html`. Then rebuild.

### Updating the live site

Make your changes, run `npm run build`, then upload the new contents of `dist/spa` over the old files (delete the old `assets` folder first so outdated files don't accumulate).

## Where to change things

| What | File |
|---|---|
| Phone, email, office address, social links | `src/data/site.js` |
| Solutions by institution type, IT equipment list | `src/data/site.js` |
| Brand colours | `src/css/quasar.variables.scss` |
| Shared styles (buttons, sections, grids) | `src/css/app.scss` |
| Header, navigation, mobile menu | `src/layouts/MainLayout.vue` |
| Footer | `src/components/SiteFooter.vue` |
| Page content | `src/pages/*.vue` |
| Photos | `public/images/` |
| Page title and search description | `index.html` |

## SEO

Search optimisation is driven from one file, **`src/data/seo.js`**:

- **Page titles and descriptions** — edit `pages` (keep titles under ~60 characters and descriptions under ~160).
- **Site address** — `SITE.url` (used for canonical links, the sitemap and social cards). Change it if the domain changes.
- **Structured data (JSON-LD)** — Organization, WebSite, SoftwareApplication, BreadcrumbList, FAQPage (from the Platform FAQ in `src/data/site.js`), Solutions and About/Contact page types.

What happens on `npm run build` (via `afterBuild` in `quasar.config.js` → `scripts/seo-prerender.mjs`):

- Each page gets its own HTML file (`index.html`, `platform.html`, `solutions.html`, `about-us.html`, `contact-us.html`, `404.html`) with its title, description, canonical URL, Open Graph/Twitter tags, JSON-LD and a text version for crawlers that don't run JavaScript. Link previews on WhatsApp, LinkedIn and Facebook use these tags.
- `sitemap.xml` and `robots.txt` are generated.

`public/.htaccess` serves clean URLs from those files, forces HTTPS and the non-www domain, 301-redirects old and `.html` URLs, returns a real 404 for unknown pages, and enables compression and caching.

**After going live:**

1. Add the site to [Google Search Console](https://search.google.com/search-console) and [Bing Webmaster Tools](https://www.bing.com/webmasters), then submit `https://finultrasolution.com/sitemap.xml`.
2. Check structured data with Google's [Rich Results Test](https://search.google.com/test/rich-results).
3. Create or claim a **Google Business Profile** for the Lusaka office with the same name, address and phone number as the website.
4. When adding a page: add a route in `src/router/routes.js`, an entry in `pages` in `src/data/seo.js`, and call `useSeo('<key>')` in the page.

## Forms

The site is static (no server), so the demo request and newsletter forms open the visitor's email app with a pre-filled message to the address in `src/data/site.js`. To receive submissions without email, connect a form service.

## Photo credits

Photos in `public/images/` are from [Unsplash](https://unsplash.com) under the [Unsplash License](https://unsplash.com/license) (free for commercial use; credit appreciated, not required):

| File | Photographer | Source |
|---|---|---|
| `hero-banker.jpg` | Christina @ wocintechchat.com | [Unsplash](https://unsplash.com/photos/XghxihGqkds) |
| `hero-mobile.jpg` | Vitaly Gariev | [Unsplash](https://unsplash.com/photos/ZIHugVW3SZk) |
| `about-team.jpg` | Christina @ wocintechchat.com | [Unsplash](https://unsplash.com/photos/faEfWCdOKIg) |
| `about-office.jpg` | The Jopwell Collection | [Unsplash](https://unsplash.com/photos/LJL7wx7PM3Y) |
| `og-finultra.jpg` (social share image) | Christina @ wocintechchat.com | [Unsplash](https://unsplash.com/photos/XghxihGqkds) |
