import {
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaChrome,
  FaNpm,
} from "react-icons/fa";

import {
  SiVite,
  SiPostman,
  SiVercel,
  SiBootstrap,
  SiTailwindcss,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const frontend = [
  { name: "HTML", level: "75%" },
  { name: "CSS", level: "70%" },
  { name: "JavaScript", level: "65%" },
  { name: "React", level: "68%" },
];

const programming = [
  { name: "Java", level: "72%" },
  { name: "Python", level: "50%" },
  { name: "C++", level: "65%" },
];

const tools = [
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
  { name: "Vite", icon: <SiVite className="text-violet-400" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
  { name: "Chrome", icon: <FaChrome className="text-yellow-400" /> },
  { name: "Vercel", icon: <SiVercel className="text-white" /> },
  { name: "npm", icon: <FaNpm className="text-red-500" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-violet-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
];

const Skills = () => {
  return (
    <section className="px-2 py-16 sm:px-4" id="skills">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Skills
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-400">
            Technologies, programming languages, and tools I use to build responsive,
            modern, and user-friendly web applications.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Frontend */}
          <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-6 shadow-xl backdrop-blur-xl transition duration-300 hover:border-sky-500/30">
            <h3 className="mb-6 text-xl font-semibold text-sky-400">
              Frontend
            </h3>

            {frontend.map((skill) => (
              <div className="mb-5" key={skill.name}>
                <div className="mb-2 flex justify-between text-sm text-zinc-300">
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </div>

                <div className="h-2.5 overflow-hidden rounded-full bg-zinc-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-400 transition-all duration-1000"
                    style={{ width: skill.level }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Programming */}
          <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-6 shadow-xl backdrop-blur-xl transition duration-300 hover:border-sky-500/30">
            <h3 className="mb-6 text-xl font-semibold text-sky-400">
              Programming
            </h3>

            {programming.map((skill) => (
              <div className="mb-5" key={skill.name}>
                <div className="mb-2 flex justify-between text-sm text-zinc-300">
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </div>

                <div className="h-2.5 overflow-hidden rounded-full bg-zinc-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-sky-500 to-blue-600 transition-all duration-700"
                    style={{ width: skill.level }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tools */}
          {/* Tools */}
<div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-sky-500/30">
  <h3 className="mb-6 text-xl font-semibold text-sky-400">
    Tools
  </h3>

  <div className="grid grid-cols-2 gap-4">
    {tools.map((tool) => (
      <div
        key={tool.name}
        className="
          group
          flex
          items-center
          gap-3
          rounded-xl
          border
          border-white/10
          bg-zinc-800/60
          p-4
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-sky-500
          hover:bg-zinc-800
          hover:shadow-[0_0_25px_rgba(14,165,233,0.25)]
        "
      >
        <span className="text-2xl transition-transform duration-300 group-hover:scale-125">
          {tool.icon}
        </span>

        <span className="text-sm font-medium text-zinc-200">
          {tool.name}
        </span>
      </div>
    ))}
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;