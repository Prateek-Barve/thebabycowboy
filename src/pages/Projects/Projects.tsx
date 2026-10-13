// import "./Projects.css";

// type Project = {
//   number: string;
//   name: string;
//   category: string;
//   description: string;
//   technologies: string[];
//   color: string;
// };

// const projects: Project[] = [
//   {
//     number: "01",
//     name: "JbTrace",
//     category: "WEB APPLICATION",
//     description:
//       "A job application tracker designed to bring a little more structure and clarity to the job search.",
//     technologies: [".NET", "React", "API"],
//     color: "sage",
//   },
//   {
//     number: "02",
//     name: "MediaLog",
//     category: "BACKEND / API",
//     description:
//       "A backend project exploring how to build and organize functionality around media-related records.",
//     technologies: [".NET", "REST API"],
//     color: "lavender",
//   },
//   {
//     number: "03",
//     name: "CityServe",
//     category: "WEB APPLICATION",
//     description:
//       "An ASP.NET Core MVC project focused on building a structured, server-rendered web application.",
//     technologies: ["ASP.NET Core MVC", "C#", "SQL"],
//     color: "peach",
//   },
//   {
//     number: "04",
//     name: "JaPI / LoJer",
//     category: "PERSONAL TOOL",
//     description:
//       "A journal API project exploring how personal writing and entries can be managed through a backend service.",
//     technologies: ["API", "DynamoDB"],
//     color: "blue",
//   },
//   {
//     number: "05",
//     name: "BiblioFlikFolio",
//     category: "FRONTEND PROJECT",
//     description:
//       "A React-based frontend experiment combining ideas around books, films, and personal collections.",
//     technologies: ["React", "TypeScript"],
//     color: "sage",
//   },
//   {
//     number: "06",
//     name: "thebabycowboy",
//     category: "PERSONAL WEBSITE",
//     description:
//       "A little corner of the internet for projects, reflections, places, books, and the things I'm figuring out along the way.",
//     technologies: ["React", ".NET", "MongoDB", "AI"],
//     color: "lavender",
//   },
// ];

// const Projects = () => {
//   return (
//     <div className="projects-page">
//       <header className="projects-hero">
//         <p className="projects-eyebrow">A COLLECTION OF THINGS I'VE BUILT</p>

//         <h1 className="projects-hero__title">
//           Some ideas
//           <br />
//           made real.
//         </h1>

//         <p className="projects-hero__intro">
//           Small experiments, useful tools, and projects that started
//           with a question. Some are works in progress; others have
//           taught me something worth carrying forward.
//         </p>

//         <div className="projects-hero__meta">
//           <span>PERSONAL PROJECTS</span>
//           <span>{String(projects.length).padStart(2, "0")} COLLECTIONS</span>
//         </div>
//       </header>

//       <section className="projects-collection">
//         <div className="projects-collection__heading">
//           <div>
//             <p className="projects-eyebrow">THE WORKSHOP</p>
//             <h2>Projects &amp; experiments</h2>
//           </div>

//           <p className="projects-collection__note">
//             Things built out of curiosity.
//           </p>
//         </div>

//         <div className="projects-grid">
//           {projects.map((project) => (
//             <article
//               className={`project-card project-card--${project.color}`}
//               key={project.number}
//             >
//               <div className="project-card__top">
//                 <span className="project-card__number">
//                   {project.number}
//                 </span>
//                 <span className="project-card__category">
//                   {project.category}
//                 </span>
//               </div>

//               <div className="project-card__body">
//                 <h3>{project.name}</h3>
//                 <p>{project.description}</p>
//               </div>

//               <div className="project-card__bottom">
//                 <div className="project-card__technologies">
//                   {project.technologies.map((technology) => (
//                     <span key={technology}>{technology}</span>
//                   ))}
//                 </div>

//                 <span
//                   className="project-card__mark"
//                   aria-hidden="true"
//                 >
//                   ↗
//                 </span>
//               </div>
//             </article>
//           ))}
//         </div>
//       </section>

//       <section className="projects-note">
//         <p className="projects-eyebrow">A SMALL NOTE</p>
//         <h2>Not everything starts with a grand plan.</h2>
//         <p>
//           Sometimes you build something to solve a problem. Sometimes
//           you build it just to understand how it works. Both are good
//           reasons to start.
//         </p>
//       </section>
//     </div>
//   );
// };

// export default Projects;

import { useEffect, useState } from "react";
import "./Projects.css";
import {
  contentApi,
  type Project,
  type Skill,
  type Certification,
} from "../../services/contentApi";

const projectColors = ["sage", "lavender", "peach", "blue"];

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadContent() {
      setLoading(true);
      setError("");

      try {
        const [projectData, skillData, certificationData] =
          await Promise.all([
            contentApi.getProjects(),
            contentApi.getSkills(),
            contentApi.getCertifications(),
          ]);

        if (!active) return;

        setProjects(projectData);
        setSkills(skillData);
        setCertifications(certificationData);
      } catch (err) {
        if (!active) return;

        setError(
          err instanceof Error
            ? err.message
            : "Unable to load portfolio content."
        );
      } finally {
        if (active) setLoading(false);
      }
    }

    void loadContent();

    return () => {
      active = false;
    };
  }, []);

  const skillGroups = skills.reduce<Record<string, Skill[]>>(
    (groups, skill) => {
      const category = skill.categoryName || "Other skills";

      if (!groups[category]) groups[category] = [];
      groups[category].push(skill);

      return groups;
    },
    {}
  );

  return (
    <div className="projects-page">
      <header className="projects-hero">
        <p className="projects-eyebrow">
          A COLLECTION OF THINGS I'VE BUILT
        </p>

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
          <span>
            {String(projects.length).padStart(2, "0")} PROJECTS
          </span>
        </div>
      </header>

      {loading && (
        <p className="content-state" role="status">
          Loading projects and portfolio details...
        </p>
      )}

      {!loading && error && (
        <div className="content-state content-state--error" role="alert">
          <p>We couldn't load the portfolio content.</p>
          <p>{error}</p>
          <button
            type="button"
            onClick={() => window.location.reload()}
          >
            Try again
          </button>
        </div>
      )}

      {!loading && !error && (
        <>
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

            {projects.length === 0 ? (
              <p className="content-state">
                No projects have been added yet.
              </p>
            ) : (
              <div className="projects-grid">
                {projects.map((project, index) => (
                  <article
                    className={`project-card project-card--${
                      projectColors[index % projectColors.length]
                    }`}
                    key={project.id}
                  >
                    <div className="project-card__top">
                      <span className="project-card__number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="project-card__category">
                        {project.status === "InProgress"
                          ? "IN PROGRESS"
                          : project.status === "Archived"
                            ? "ARCHIVED"
                            : "COMPLETED"}
                      </span>
                    </div>

                    {project.thumbnailUrl && (
                      <img
                        className="project-card__image"
                        src={project.thumbnailUrl}
                        alt={`${project.title} preview`}
                        loading="lazy"
                      />
                    )}

                    <div className="project-card__body">
                      <h3>{project.title}</h3>
                      <p>
                        {project.shortDescription ||
                          project.description}
                      </p>
                    </div>

                    <div className="project-card__bottom">
                      <div className="project-card__technologies">
                        {(project.skills ?? []).map((skill) => (
                          <span key={skill.id}>{skill.name}</span>
                        ))}
                      </div>

                      {project.gitHubUrl && (
                        <a
                          className="project-card__mark"
                          href={project.gitHubUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          ↗
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>

          <section className="projects-collection">
            <div className="projects-collection__heading">
              <div>
                <p className="projects-eyebrow">TOOLS OF THE TRADE</p>
                <h2>Skills &amp; technologies</h2>
              </div>

              <p className="projects-collection__note">
                Things I'm learning and building with.
              </p>
            </div>

            {skills.length === 0 ? (
              <p className="content-state">
                No skills have been added yet.
              </p>
            ) : (
              <div className="skills-groups">
                {Object.entries(skillGroups).map(
                  ([category, categorySkills]) => (
                    <div className="skill-group" key={category}>
                      <h3>{category}</h3>

                      <div className="skill-list">
                        {categorySkills.map((skill) => (
                          <div className="skill-item" key={skill.id}>
                            {skill.iconUrl && (
                              <img
                                src={skill.iconUrl}
                                alt=""
                                loading="lazy"
                              />
                            )}
                            <span>{skill.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            )}
          </section>

          <section className="projects-collection">
            <div className="projects-collection__heading">
              <div>
                <p className="projects-eyebrow">MILESTONES</p>
                <h2>Certifications</h2>
              </div>

              <p className="projects-collection__note">
                Learning, validated.
              </p>
            </div>

            {certifications.length === 0 ? (
              <p className="content-state">
                Certifications will appear here as they're added.
              </p>
            ) : (
              <div className="certifications-grid">
                {certifications.map((certification) => (
                  <article
                    className="certification-card"
                    key={certification.id}
                  >
                    <div className="certification-card__icon">
                      ↗
                    </div>

                    <div>
                      <h3>{certification.name}</h3>
                      <p>{certification.issuer}</p>
                    </div>

                    {certification.url && (
                      <a
                        href={certification.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${certification.name} certification`}
                      >
                        View credential ↗
                      </a>
                    )}
                  </article>
                ))}
              </div>
            )}
          </section>

          <section className="projects-note">
            <p className="projects-eyebrow">A SMALL NOTE</p>
            <h2>Not everything starts with a grand plan.</h2>
            <p>
              Sometimes you build something to solve a problem.
              Sometimes you build it just to understand how it works.
              Both are good reasons to start.
            </p>
          </section>
        </>
      )}
    </div>
  );
};

export default Projects;
