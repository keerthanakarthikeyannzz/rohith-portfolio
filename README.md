# Rohith A — Portfolio (original layout, beige theme)

A personal portfolio built with **React 19, Vite, Tailwind CSS and Framer Motion**. It keeps the original layout and effects, recoloured in a beige palette: glass cards, gradient accents, a typing hero, an animated skills and timeline layout, filterable projects, a certificate dialog and a contact form.

## Getting started

Requires **Node.js 18+** (20 or newer recommended).

```bash
npm install        # install dependencies
npm run dev        # start the dev server at http://localhost:5173
npm run build      # production build into dist/
npm run preview    # serve the production build locally
```

## Editing content

All content lives in **`src/data/portfolioData.js`**.

- **Projects:** array order is display order (CertiVerify AI is second). Set `github` / `demo` to a URL to show a button; leave them `null` to hide it. Add `demo` only once a working deployment exists.
- **Certificates:** add a `credentialUrl` to show a "View Credential" button.
- **Resume:** replace `public/resume.pdf` (download name is `resumeFileName`).
- **Photo:** replace `public/profile.jpg`.

## Contact form

Without configuration, **Send Message** opens the visitor's email app with the message prefilled. To send directly from the page with [EmailJS](https://www.emailjs.com/), copy `.env.example` to `.env` and fill in `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID` and `VITE_EMAILJS_PUBLIC_KEY` (on Vercel/Netlify/Cloudflare Pages, set the same variables in the project settings). Never put private API keys in this project.

## Deployment

The build uses `base: './'`, so it works from a site root or a sub-path.

- **Cloudflare Pages / Vercel / Netlify:** framework preset **Vite**, build command `npm run build`, output directory `dist`.
- **GitHub Pages:** `npm install --save-dev gh-pages`, add `"deploy": "npm run build && gh-pages -d dist"` to scripts, run `npm run deploy`, and set Pages to serve the `gh-pages` branch.

## Structure

```
├── public/            favicon.ico, profile.jpg, resume.pdf
├── src/
│   ├── components/    Navbar, Hero, About, Skills, Experience, Projects, Certificates, Contact, Footer, …
│   ├── data/          portfolioData.js  (all content)
│   ├── styles/        globals.css
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
└── package.json
```

## Theme colors

Defined once in `tailwind.config.js`: `bg #F5F0E8`, `alt #EAE1D4`, `card #FFFDF8`, `primary #B7A48A`, `secondary #8A7357`, `accent #6B5841` (a deeper shade of the same hue for small text and button fills), `text #292720`, `muted #70695F`, `line #D9CDBD`. The moon/sun button switches to a slightly deeper beige surface; it is not a dark mode.
