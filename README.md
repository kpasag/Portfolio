# Kyle Pasag - Portfolio

This is a personal portfolio site themed after Elden Ring. Light mode is based on the Golden Order colour scheme (Radagon/Marika), while dark mode is based on the Full Moon colour scheme (Ranni/Rennala).

**Live site:** [kylepasag.dev](https://kylepasag.dev)

## Tech Stack

- React
- Tailwind CSS v4
- Vite
- Deployed on Netlify

## Features

- **Dual theme system** with localStorage persistence and OS preference fallback via `matchMedia`
- **No flash on load** thanks to an inline script in `index.html` that applies the theme before the first paint
- **Dynamic favicon** that swaps between a sun and moon icon to match the active theme
- **Image carousel** built from scratch with React state (no external library)
- **Typing animation** cycling through roles and interests
- **Smooth scrolling** navigation without hash pollution in the URL
- **Responsive layout** with mobile-adjusted background positioning and scaling

## Running Locally

```
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
npm install
npm run dev
```

## Footer

> This website is heavily inspried by Elden Ring. No summons were used in the making of this site.
