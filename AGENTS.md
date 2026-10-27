# valeriaconde.com

Static personal site built with Astro 7, Tailwind CSS 4, GSAP and Lenis. No database, no server: `npm run build` outputs plain HTML to `dist/` (deployed by Netlify).

- Content lives in `src/data/*.ts`. Edit those files to change what the pages show.
- Life updates ("Lately", at `/lately`) are a content collection: one folder per post in `src/content/lately/<name>/` with an `index.md` and its photos or video. How-to with examples: `src/content/lately/README.md`. The 3 newest also show on the homepage.
- Never put Valeria's email address on the site.
- Pages are in `src/pages/`, shared pieces in `src/components/`, the layout in `src/layouts/Base.astro`.
- Animations are opt-in via data attributes handled in `src/scripts/motion.ts` (documented at the top of that file). Everything must still render when JS is off or the user prefers reduced motion.
- Design tokens (colors, fonts) are in `src/styles/global.css` under `@theme`.
