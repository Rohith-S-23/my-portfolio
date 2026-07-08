import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-zinc-950/70 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div>
          <h2 className="text-2xl font-semibold text-white">Rohith</h2>
          <p className="mt-2 text-sm text-zinc-400">Frontend Developer • React Developer • Problem Solver</p>
        </div>

        <div className="flex items-center gap-3 text-xl text-zinc-300">
          <a href="https://github.com/Rohith-S-23" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:text-sky-400">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:text-sky-400">
            <FaLinkedin />
          </a>
          <a href="mailto:rohith@example.com" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:text-sky-400">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-6 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-zinc-500 md:flex-row">
        <p>© 2026 Rohith. Built with React & Vite.</p>
        <a href="#home" className="rounded-full border border-white/10 bg-white/5 p-3 text-white transition hover:text-sky-400">
          <FaArrowUp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;