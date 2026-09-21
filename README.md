# Outlook Pointe Campground

The website for Outlook Pointe, a small RV campground in Milton, West Virginia that rents lots by the month. Live at [outlookcampground.com](https://www.outlookcampground.com).

It is a single page built to answer what a renter asks before calling: the rate, the hookups, whether their rig will fit, what is and is not on site, and how to reach the owners.

## Stack

- Vue 3 and Vite, no router or state library
- Pre-rendered at build time, so the page is complete HTML before any JavaScript runs
- Plain CSS with design tokens (`src/styles/tokens.css`), light and dark themes
- A Netlify function that serves the live Google rating, cached for a day
- Self-hosted variable fonts, no third-party requests at runtime
- Vitest and ESLint
- Hosted on Netlify

## Running it

```sh
npm install
npm run dev       # dev server on http://localhost:8080
npm run build     # production build into dist/, including the pre-render
npm run preview   # serve the production build
npm test
npm run lint
```

The rating function reads `GOOGLE_PLACES_API_KEY` and `GOOGLE_PLACE_ID` from the environment. Without them, or on the dev server, the page shows its built-in fallback rating.

## Layout

```
index.html              page head, meta tags and structured data
src/
  App.vue               mounts the sections in page order
  components/           one file per section, plus AppIcon
  data/                 business facts, fallback rating, review quotes
  styles/               tokens.css and base.css
  utils/scrollReveal.js
  entry-server.js       render function used by the pre-render step
scripts/prerender.mjs   writes the rendered page into dist/index.html
netlify/functions/      rating.mjs, served at /api/rating
tests/
```

## Notes

- Business facts live in `src/data/site.js`. The structured data in `index.html` is static and has to be updated by hand alongside it.
- Component styles use tokens only. No raw sizes, colours or durations.
- Lighthouse on the live site: 100 for accessibility, best practices and SEO, and 93 to 100 for performance.
