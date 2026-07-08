import profile from "../assets/profile.png";
import resume from "../assets/resume.pdf";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="flex min-h-[calc(100vh-7rem)] flex-col items-center justify-center gap-12 py-16 lg:flex-row lg:justify-between lg:py-16" id="home">
      <div className="max-w-2xl">
        <span className="mb-6 inline-flex rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-300">
          Seeking for Internships
        </span>

        <h3 className="mb-3 text-2xl text-zinc-300 sm:text-3xl">I&apos;m Rohith S</h3>

        <h1 className="mb-4 text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
          Full-Stack <span className="text-sky-400">Web</span> Developer
        </h1>

        <p className="max-w-xl text-lg leading-8 text-zinc-400">
          Passionate Full Stack Developer building modern, scalable, and user-friendly web applications.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={resume}
            download
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-zinc-100 transition hover:bg-sky-600/90 transition-all duration-300"
          >
            <FaDownload />
            <span>Download Resume</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-zinc-100 transition hover:bg-sky-600/90 transition-all duration-300"
          >
            <i className="bi bi-telephone-inbound text-lg"></i>
            <span>Contact Me</span>
          </a>
        </div>

        <div className="mt-8 flex gap-4 text-xl text-zinc-300">
          <a href="https://github.com/Rohith-S-23" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:text-sky-400">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/rohiith-23-s/" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:text-sky-400">
            <FaLinkedin />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sakthivelrohith1975@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:text-sky-400"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="w-full max-w-md">
        <div className="">
          <img src="https://i.ibb.co/rfwMq1WH/Gemini-Generated-Image-wjd2yiwjd2yiwjd2-1.png" alt="Profile" className="w-full rounded-[1.5rem] object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Hero;