# Portfolio

Personal portfolio of Abanoub George Samir, a Junior Full-Stack Developer. It presents featured projects with live sites and source code, skills, verified certificates and contact details in a hand-built editorial design with light and dark themes.

**[Live site](https://devabanobgeorge.vercel.app)**

[![CI](https://github.com/AbanobGeorgeSamir/Portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/AbanobGeorgeSamir/Portfolio/actions/workflows/ci.yml)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

<!-- Add a screenshot here, for example: ![Portfolio](docs/portfolio.png) -->

## Features

- Single-page layout: hero, about, projects, skills, certificates and contact
- Light and dark themes, saved between visits
- Custom cursor, preloader, scroll-reveal animations and a skills marquee
- Responsive layout with a project list that previews each project on hover
- Content lives in one file, `src/data.js`, so updating projects, skills or certificates needs no component changes
- Search-friendly page title, description and Open Graph tags, plus a no-JavaScript fallback message

## Tech Stack

React, Vite, plain CSS and ESLint. No UI kit or template. Hosted on Vercel.

## Project Structure

```text
src/data.js         Profile, projects, skills, certificates and links
src/components/     Navbar, Hero, About, Projects, Skills, Certificates, Contact, Footer
src/hooks/          Reusable hooks (for example, the live local clock)
src/App.jsx         Page layout and theme handling
public/             Static assets
```

## Getting Started

```bash
git clone https://github.com/AbanobGeorgeSamir/Portfolio.git
cd Portfolio
npm install
npm run dev
```

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build in `dist` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

## Deployment

Import the repository into Vercel. The defaults work: build command `npm run build`, output directory `dist`.

## Contact

[devabanoubgeorge@gmail.com](mailto:devabanoubgeorge@gmail.com) · [LinkedIn](https://www.linkedin.com/in/abanob-george-samir) · [GitHub](https://github.com/AbanobGeorgeSamir)
