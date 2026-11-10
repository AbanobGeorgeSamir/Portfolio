# Abanob George — Portfolio

A hand-built portfolio for **Abanob George Samir**, full-stack developer in Cairo.
Editorial typography, considered motion and no UI kit — every layout, colour and
transition is written by hand in React and CSS.

[![Live Site](https://img.shields.io/badge/Live_Site-devabanobgeorge.vercel.app-d8a66d?style=for-the-badge&logo=vercel&logoColor=white)](https://devabanobgeorge.vercel.app)

![React](https://img.shields.io/badge/React-19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-hand--written-1572B6?style=flat-square&logo=css3&logoColor=white)

## Design

- **Obsidian, bone and copper.** A restrained warm palette on a near-black canvas,
  with a light "paper" theme that keeps the same typographic voice.
- **Type as the interface.** *Instrument Serif* for display, *Inter Tight* for
  everything functional — no gradient hero cards or glassmorphism panels.
- **One accent, used sparingly.** Copper marks the moment something is interactive.
- **Grain and hairlines.** A fine film-grain overlay and 1px rules give flat colour
  a printed, physical feel.

## Features

- Curtain preloader with a live progress counter
- Custom lerped cursor that scales over interactive elements
- Kinetic hero: masked line reveals and a pointer-following glow
- Scroll progress bar, active-section nav and a full-screen mobile menu
- Editorial project list with a cursor-following image plate for each project
- Scroll-triggered reveals with staggered delays
- Light / dark theme toggle, persisted and flash-free via an inline bootstrap script
- Copy-email contact button with inline confirmation
- Local Cairo clock in the hero and footer
- Reduced-motion and keyboard-focus support, skip link, and semantic landmarks
- Responsive from 320px up

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build tool | Vite 8 |
| Styling | Hand-written CSS with custom properties |
| Fonts | Instrument Serif & Inter Tight (Google Fonts) |
| Dependencies | React and React DOM only |

## Getting Started

```bash
git clone https://github.com/AbanobGeorgeSamir/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Structure

```
src/
├─ components/   Navbar, Hero, Marquee, Projects, About, Skills, Contact, Footer
│                Preloader, Cursor
├─ hooks/        useRevealOnScroll, useLocalTime, useTheme
├─ data.js       Profile, projects, skills, principles and social links
├─ App.jsx       Section composition and theme state
├─ index.css     Design tokens, base styles, cursor and preloader
└─ App.css       Section layouts, responsive rules and keyframes
```

## Editing content

All copy lives in `src/data.js`: profile and social links, the project list, skill
groups and principles. Adding a project only needs an entry there — the list and
its hover plate pick it up automatically.

## Author

**Abanob George Samir** — [Portfolio](https://devabanobgeorge.vercel.app) ·
[LinkedIn](https://www.linkedin.com/in/abanob-george-samir) ·
[GitHub](https://github.com/AbanobGeorgeSamir)
