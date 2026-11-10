export const profile = {
  name: "Abanob George Samir",
  first: "Abanob",
  last: "George",
  lastAlt: "Samir",
  role: "Full-stack developer",
  email: "samirabanob848@gmail.com",
  phone: "01068992594",
  whatsapp: "https://wa.me/201068992594",
  github: "https://github.com/AbanobGeorgeSamir",
  linkedin: "https://www.linkedin.com/in/abanob-george-samir",
  live: "https://devabanobgeorge.vercel.app",
  location: "Cairo, Egypt",
};

export const projects = [
  {
    title: "Restaurant",
    blurb:
      "A Laravel application for running restaurant operations — menus, orders and reservations behind one clean, fast interface.",
    year: "2025",
    tags: ["Laravel", "MySQL", "Blade"],
    link: "https://github.com/AbanobGeorgeSamir/Restaurant",
    mark: "R",
    colors: ["#241811", "#b96b3c", "#ead8c3"],
  },
  {
    title: "Task Manager",
    blurb:
      "Create, edit and organise tasks in a Laravel and PHP app built around a deliberately quiet, focused workflow.",
    year: "2025",
    tags: ["Laravel", "PHP", "MySQL"],
    link: "https://github.com/AbanobGeorgeSamir/TaskManager",
    mark: "T",
    colors: ["#121a22", "#4d7ba6", "#d5e2ee"],
  },
  {
    title: "Meals",
    blurb:
      "A responsive recipe site where every dish gets room to breathe — imagery, detail and a layout that holds up on any screen.",
    year: "2024",
    tags: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/AbanobGeorgeSamir/Meals",
    mark: "M",
    colors: ["#1b2215", "#7c9850", "#e4ecd8"],
  },
  {
    title: "Chess Game",
    blurb:
      "Chess in Python and Pygame: full piece movement, turn logic and a board that rewards careful, deliberate play.",
    year: "2024",
    tags: ["Python", "Pygame"],
    link: "https://github.com/AbanobGeorgeSamir/ChessGame",
    mark: "C",
    colors: ["#191919", "#7e7e7e", "#e6e3db"],
  },
  {
    title: "Snake Game",
    blurb:
      "The classic, rebuilt — smooth grid movement, live scoring and instant restart, written in Python with Pygame.",
    year: "2024",
    tags: ["Python", "Pygame"],
    link: "https://github.com/AbanobGeorgeSamir/SnakeGame",
    mark: "S",
    colors: ["#132019", "#4c8869", "#dcebe1"],
  },
  {
    title: "Portfolio",
    blurb:
      "This site: a hand-built React and Vite portfolio with an editorial eye, considered motion and no template in sight.",
    year: "2026",
    tags: ["React", "Vite", "CSS"],
    link: "https://github.com/AbanobGeorgeSamir/Portfolio",
    mark: "A",
    colors: ["#1a1720", "#7a6b9a", "#e4dff0"],
  },
];

export const skillGroups = [
  {
    title: "Client",
    caption: "Interfaces, state and the parts people touch.",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "Bootstrap",
      "Vite",
      "Flutter",
      "Responsive design",
    ],
  },
  {
    title: "Server",
    caption: "APIs, authentication and business logic.",
    items: [
      "PHP",
      "Laravel",
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Eloquent ORM",
      "MVC architecture",
      "Sanctum / JWT",
      "Role-based access",
      "API integration",
    ],
  },
  {
    title: "Data",
    caption: "Schemas and the fundamentals underneath.",
    items: [
      "MySQL",
      "MongoDB",
      "SQL",
      "Relational database design",
      "OOP",
      "Data structures & algorithms",
      "Python",
    ],
  },
  {
    title: "Delivery",
    caption: "Tests, tooling and getting it shipped.",
    items: [
      "Git & GitHub",
      "GitHub Actions (CI)",
      "PHPUnit & Node test runner",
      "Postman",
      "Agile",
      "Vercel · Netlify · Firebase",
      "UI/UX & wireframing",
      "Scripting & automation",
      "Debugging",
    ],
  },
];

export const certificates = [
  {
    title: "Programming in C",
    issuer: "University of Michigan · Coursera",
    date: "Nov 2026",
    verify: "https://coursera.org/verify/0IUPJC1WR4AN",
  },
  {
    title: "Getting Started with Cisco Packet Tracer",
    issuer: "Cisco Networking Academy",
    date: "Nov 2025",
    verify: null,
  },
  {
    title: "HTML Essentials",
    issuer: "Cisco Networking Academy",
    date: "Nov 2025",
    verify: null,
  },
  {
    title: "Frontend Development",
    issuer: "One Roadmap",
    date: "Dec 2025",
    verify: "https://oneroadmap.io/skills/frontend/certificate/CERT-98ACB4E7",
  },
  {
    title: "React.js Developer",
    issuer: "One Roadmap",
    date: "Dec 2025",
    verify: "https://oneroadmap.io/skills/react/certificate/CERT-79B1DC12",
  },
  {
    title: "SQL",
    issuer: "One Roadmap",
    date: "Dec 2025",
    verify: "https://oneroadmap.io/skills/sql/certificate/CERT-F7323A71",
  },
  {
    title: "CSS",
    issuer: "One Roadmap",
    date: "Dec 2025",
    verify: "https://oneroadmap.io/skills/css/certificate/CERT-83CAEA63",
  },
  {
    title: "Python",
    issuer: "One Roadmap",
    date: "Dec 2025",
    verify: "https://oneroadmap.io/skills/python/certificate/CERT-95215401",
  },
  {
    title: "Excel",
    issuer: "One Roadmap",
    date: "Dec 2025",
    verify: "https://oneroadmap.io/skills/excel/certificate/CERT-91AB8ACB",
  },
];

export const principles = [
  {
    title: "Clarity first",
    body: "Every screen starts with a question: what is the one thing someone came here to do? The rest earns its place or leaves.",
  },
  {
    title: "Built to hold up",
    body: "Clean structure, sensible naming and code that a future reader — usually me, six months later — can follow without a tour.",
  },
  {
    title: "Detail as default",
    body: "Alignment, easing, the empty state, the hover. Small decisions compound into work that feels finished.",
  },
];

export const socials = [
  { label: "GitHub", href: profile.github, meta: "@AbanobGeorgeSamir" },
  { label: "LinkedIn", href: profile.linkedin, meta: "/in/abanob-george-samir" },
  { label: "WhatsApp", href: profile.whatsapp, meta: profile.phone },
  { label: "Live site", href: profile.live, meta: "devabanobgeorge.vercel.app" },
];

export const marqueeItems = [
  "Laravel",
  "React",
  "PHP",
  "Node.js",
  "MySQL",
  "JavaScript",
  "Python",
];
