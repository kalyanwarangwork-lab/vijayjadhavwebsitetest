# Elena Voss — Painter Portfolio (React + Vite + Tailwind)

A React rebuild of the painter portfolio demo: hero with a brush-stroke
reveal animation, a salon-style gallery grid, a framed lightbox view, a
custom brush cursor over the gallery, and a procedural canvas/linen texture
as the site-wide background.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

To build a production version:

```bash
npm run build
npm run preview   # to check the production build locally
```

## Project structure

```
src/
  App.jsx                 – top-level layout, wires the lightbox state
  index.css               – Tailwind import, design tokens, canvas texture, animations
  data/paintings.js        – the artwork list (title, meta, description, image path)
  components/
    Nav.jsx
    Hero.jsx
    Gallery.jsx
    PieceCard.jsx
    BrushCursor.jsx
    Lightbox.jsx
    About.jsx
    Footer.jsx
public/
  paintings/               – artwork images (currently placeholder SVGs)
```

## Swapping in the real paintings

1. Drop the client's actual photographed paintings into `public/paintings/`
   (JPG or PNG work fine, not just SVG).
2. Edit `src/data/paintings.js` — update each entry's `img` path, `title`,
   `meta` (medium / size / year), and `desc`. Add or remove entries as needed;
   the grid will reflow automatically.
3. Swap `public/paintings/hero.svg` (used in `Hero.jsx`) and
   `public/paintings/portrait.svg` (used in `About.jsx`) similarly.
4. Set `span: "wide"` on a painting entry to make its gallery tile span two
   grid columns — useful for landscape-format pieces.

## Design tokens

Colors, fonts, and the canvas texture are defined once in `src/index.css`
under the `@theme` block and used as Tailwind utility classes throughout
(e.g. `bg-ink`, `text-sienna`, `font-display`). Change a value there and it
updates everywhere.

## Notes

- Tailwind v4 is used — no `tailwind.config.js` needed; the theme lives
  directly in `index.css`.
- The Google Fonts (Fraunces, Inter) are loaded via a `<link>` in
  `index.html`, so an internet connection is needed at load time for the
  intended typefaces.
- The canvas/linen texture is a small procedurally generated SVG embedded
  as a base64 data URI directly in `index.css` — no external image file to
  keep track of.
