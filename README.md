# Rishav Kumar — Portfolio v2

A fresh, motion-rich personal site for a full-stack developer working in the AI era.
Dark **aurora-glow** aesthetic fused with playful 3D/motion, built with **Vite + React +
Tailwind CSS + Framer Motion**.

## Features

- Animated aurora background that reacts to scroll, plus a moving grid overlay
- Custom glowing cursor (desktop pointers only)
- Hero with rotating role text and staggered entrance
- Skills section + a dedicated **AI tooling** spotlight (Claude, ChatGPT, Antigravity)
- Experience timeline + 3D tilt-on-hover project cards
- Scroll-reveal animations throughout, with `prefers-reduced-motion` respected
- Fully responsive (mobile → desktop)

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the build
```

## Make it yours

**All copy lives in one file:** [`src/data/content.js`](src/data/content.js).
Update your name, roles, bio, stats, stacks, AI tools, experience, projects, email
and social links there. Anything marked `// TODO` is a best-guess placeholder — swap
in your real details (job titles, prior company, project links, resume URL, socials).

### Theme

Colors, fonts and keyframe animations are defined in
[`tailwind.config.js`](tailwind.config.js) (see the `glow` palette) and
[`src/index.css`](src/index.css). Change the gradient stops there to re-skin the site.

## Deploy

Any static host works — the build outputs a plain `dist/` folder:

- **Vercel / Netlify:** import the repo, framework preset "Vite", build `npm run build`, output `dist`.
- **GitHub Pages / Cloudflare Pages:** upload `dist/`.
