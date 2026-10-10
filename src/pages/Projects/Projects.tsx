import "./Projects.css";

type Project = {
  number: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  color: string;
};

const projects: Project[] = [
  {
    number: "01",
    name: "JbTrace",
    category: "WEB APPLICATION",
    description:
      "A job application tracker designed to bring a little more structure and clarity to the job search.",
    technologies: [".NET", "React", "API"],
    color: "sage",
  },
  {
    number: "02",
    name: "MediaLog",
    category: "BACKEND / API",
    description:
      "A backend project exploring how to build and organize functionality around media-related records.",
    technologies: [".NET", "REST API"],
    color: "lavender",
  },
  {
    number: "03",
    name: "CityServe",
    category: "WEB APPLICATION",
    description:
      "An ASP.NET Core MVC project focused on building a structured, server-rendered web application.",
    technologies: ["ASP.NET Core MVC", "C#", "SQL"],
    color: "peach",
  },
  {
    number: "04",
    name: "JaPI / LoJer",
    category: "PERSONAL TOOL",
    description:
      "A journal API project exploring how personal writing and entries can be managed through a backend service.",
    technologies: ["API", "DynamoDB"],
    color: "blue",
  },
  {
    number: "05",
    name: "BiblioFlikFolio",
    category: "FRONTEND PROJECT",
    description:
      "A React-based frontend experiment combining ideas around books, films, and personal collections.",
    technologies: ["React", "TypeScript"],
    color: "sage",
  },
  {
    number: "06",
    name: "thebabycowboy",
    category: "PERSONAL WEBSITE",
    description:
      "A little corner of the internet for projects, reflections, places, books, and the things I'm figuring out along the way.",
    technologies: ["React", ".NET", "MongoDB", "AI"],
    color: "lavender",
  },
];

const Projects = () => {
  return (
    <div className="projects-page">
      <header className="projects-hero">
        <p className="projects-eyebrow">A COLLECTION OF THINGS I'VE BUILT</p>

        <h1 className="projects-hero__title">
          Some ideas
          <br />
          made real.
        </h1>

        <p className="projects-hero__intro">
          Small experiments, useful tools, and projects that started
          with a question. Some are works in progress; others have
          taught me something worth carrying forward.
        </p>

        <div className="projects-hero__meta">
          <span>PERSONAL PROJECTS</span>
          <span>{String(projects.length).padStart(2, "0")} COLLECTIONS</span>
        </div>
      </header>

      <section className="projects-collection">
        <div className="projects-collection__heading">
          <div>
            <p className="projects-eyebrow">THE WORKSHOP</p>
            <h2>Projects &amp; experiments</h2>
          </div>

          <p className="projects-collection__note">
            Things built out of curiosity.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className={`project-card project-card--${project.color}`}
              key={project.number}
            >
              <div className="project-card__top">
                <span className="project-card__number">
                  {project.number}
                </span>
                <span className="project-card__category">
                  {project.category}
                </span>
              </div>

              <div className="project-card__body">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>

              <div className="project-card__bottom">
                <div className="project-card__technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <span
                  className="project-card__mark"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-note">
        <p className="projects-eyebrow">A SMALL NOTE</p>
        <h2>Not everything starts with a grand plan.</h2>
        <p>
          Sometimes you build something to solve a problem. Sometimes
          you build it just to understand how it works. Both are good
          reasons to start.
        </p>
      </section>
    </div>
  );
};

export default Projects;