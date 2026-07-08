import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Employee Payroll System",
    description:
      "A payroll management system that automates employee records, attendance tracking, salary calculation, payslip generation, and payroll management.",
    tech: ["Java", "MySQL", "Swing"],
    github: "https://github.com/Rohith-S-23",
    demo: "#",
    image: "https://i.ibb.co/s9bhVFpF/payroll-projet-system-img.png",
  },
  {
    title: "Personal Portfolio",
    description:
      "A modern responsive portfolio website built using React and Vite with smooth scrolling, animations, and a clean UI.",
    tech: ["React", "Tailwind CSS", "Vite"],
    github: "https://github.com/Rohith-S-23",
    demo: "#",
    image: "https://i.ibb.co/dJ1Npfk6/rohtih.png",
  },
  {
    title: "Court Case Management System ",
    description:
      "A court case management system that streamlines case tracking, document management, and communication for legal professionals.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/Rohith-S-23",
    demo: "#",
    image: "https://www.rishabhsoft.com/wp-content/uploads/2021/12/Court-Case-Management-Software-Modernization-1200x600-1-1024x544.jpg",
  },
];

const Projects = () => {
  return (
    <section className="px-2 py-16 sm:px-4" id="projects">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            My Projects
          </h2>
          <p className="mt-3 text-zinc-400">
            Here are some of the projects I've worked on.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/70 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-sky-500/30"
            >
              {/* Project Image */}
              {project.image ? (
                <div className="overflow-hidden border-b border-white/10">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="block"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </a>
                </div>
              ) : null}

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mb-5 text-sm leading-7 text-zinc-400">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-sky-500"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-sky-500"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;