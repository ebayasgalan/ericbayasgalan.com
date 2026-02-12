# Project: ericbayasgalan.com

Personal portfolio website for Enkhtaivan (Eric) Bayasgalan.

## Tech Stack

- **Framework**: Next.js 16 (Turbopack) with React 19
- **Language**: JSX (`.jsx` files in `src/`)
- **Styling**: SCSS (Sass), entry point at `src/styles/index.scss`, main styles in `public/scss/style.scss`
- **Node**: v25.6.1 (managed via nvm)
- **Package manager**: npm

## Key Dependencies

- `react-modal` - modals (used in About and Portfolio components, configured with `ariaHideApp={false}`)
- `react-slick` + `slick-carousel` - carousels/sliders
- `react-toastify` - toast notifications
- `react-typed` - typing animation
- `react-icons` - icon library
- `@emailjs/browser` - contact form email sending
- `aos` - animate on scroll
- `react-scrollspy-nav` - scroll spy navigation

## Commands

- `npm run dev` - start dev server (localhost:3000)
- `npm run build` - production build
- `npm run start` - start production server
- `npm run lint` - run ESLint

## Project Structure

- `src/app/` - Next.js app router pages (`homePage.jsx` is main page component)
- `src/components/` - React components organized by section (about, portfolio, header, hero, contact, footer)
- `src/data/` - data files (e.g., `portfolio.js` for portfolio items)
- `src/styles/` - SCSS entry point
- `public/` - static assets (images in `public/img/`, SCSS in `public/scss/`)

## ESLint

- ESLint 10 with `eslint-config-next@16` (some peer dependency warnings from plugins expecting ESLint 9, but functional)

## Notes

- `HeaderHorizontal` component is currently commented out in `homePage.jsx`
- `ReactTooltip` is commented out in `Portfolio.jsx`
- Portfolio data is in `src/data/portfolio.js` (uses CommonJS `module.exports`)
