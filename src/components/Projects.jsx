export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A responsive and interactive portfolio website built with HTML, CSS, and JavaScript to showcase projects, skills, and work experience.",
      link: "https://github.com/AbanobGeorgeSamir/Portfolio",
    },
    {
      title: "Restaurant",
      description:
        "A web application built with Laravel for managing restaurant operations, including menu items, orders, and reservations with a clean and interactive interface.",
      link: "https://github.com/AbanobGeorgeSamir/Restaurant",
    },
    {
      title: "Snake Game",
      description:
        "A classic Snake game built with Python and pygame, featuring smooth controls, score tracking, and restart functionality.",
      link: "https://github.com/AbanobGeorgeSamir/SnakeGame",
    },
    {
      title: "Chess Game",
      description:
        "chess game built with Python and Pygame, featuring interactive gameplay, clean visuals, and core chess mechanics.",
      link: "https://github.com/AbanobGeorgeSamir/ChessGame",
    },
    {
      title: "Task Manager",
      description:
        "A web application built with Laravel and PHP for creating, editing, and managing tasks with a clean UI and interactive features.",
      link: "https://github.com/AbanobGeorgeSamir/TaskManager",
    },
    {
      title: "Meals",
      description:
        "A dynamic website showcasing a variety of meals with images and details, built with responsive design and interactive UI.",
      link: "https://github.com/AbanobGeorgeSamir/Meals",
    },
  ];

  return (
    <section id="projects" className="projects-section section">
      <h2 className="fade-in">Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <article key={index} className="card slide-up">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.link && (
              <a href={project.link} className="btn">
                View Project
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
