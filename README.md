# idresizer.com

Free, browser-based photo resizing and cropping tools for US and UK official
documents (visa, passport, USPS appointment, UK passport, DVLA driving
license, UK railcard). Built with Next.js 14 (App Router) and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:4000.

To use a different port, either edit the `-p 4000` flag in `package.json`'s
`dev`/`start` scripts, or run `npm run dev -- -p 5000` (swap in any port).

## Build for production

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.js                 Root layout, global SEO metadata, navbar/footer
  page.js                    Homepage: hero, badges, tool grid, canvas tool, FAQ
  blog/page.js                Blog listing
  blog/[slug]/page.js         Dynamic blog post page
  about/page.js                About page
  contact/page.js              Contact page
  not-found.js                Custom 404 page
components/
  Navbar.js, Footer.js, FAQ.js, ContactForm.js
  PhotoTool.js               Client-side canvas resize/crop/compress engine
lib/
  tools.js                    Tool specs (dimensions, size caps, backgrounds)
  blogPosts.js                 Blog article content
```

## How the photo tool works

`components/PhotoTool.js` runs entirely in the browser:

1. The user selects a document type from the dropdown, which loads that
   tool's exact spec from `lib/tools.js` (target pixel dimensions, aspect
   ratio, and max file size).
2. On upload, the image is decoded locally and center-cropped to the
   target aspect ratio (cropping left/right or top/bottom depending on the
   source photo's proportions).
3. The cropped region is drawn onto an offscreen `<canvas>` at the exact
   target pixel dimensions.
4. The canvas is exported as a JPEG; if the resulting file exceeds the
   spec's size cap, JPEG quality is stepped down and re-exported until it
   fits.
5. The result is shown as a preview and offered as a direct download —
   no image data is ever sent to a server.
