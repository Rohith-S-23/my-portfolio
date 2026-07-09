import { useState } from "react";
import { FaBars, FaTimes, FaCode } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed left-1/2 top-5 z-[60] w-[90%] max-w-7xl -translate-x-1/2">
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-zinc-900/80 px-5 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:px-8">
        <a href="#home" className="flex items-center gap-3 text-2xl font-semibold text-white">
          <FaCode className="text-sky-400" />
          <span className="text-sky-400">Rohith</span>
        </a>

        <nav className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-[4.6rem] flex-col gap-4 rounded-2xl border border-white/10 bg-zinc-950/95 p-6 text-center text-sm text-zinc-300 shadow-xl md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 md:text-left md:shadow-none`}>
          <a href="#home" className="transition hover:text-sky-400" onClick={closeMenu}>Home</a>
          <a href="#about" className="transition hover:text-sky-400" onClick={closeMenu}>About</a>
          <a href="#skills" className="transition hover:text-sky-400" onClick={closeMenu}>Skills</a>
          <a href="#projects" className="transition hover:text-sky-400" onClick={closeMenu}>Projects</a>
          <a href="#education" className="transition hover:text-sky-400" onClick={closeMenu}>Education</a>
          <a href="#contact" className="transition hover:text-sky-400" onClick={closeMenu}>Contact</a>
        </nav>

        <a
          href="mailto:rohithirumala143@gmail.com"
          className="hidden rounded-xl bg-sky-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-sky-500 md:inline-flex"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hire Me
        </a>

        <button
          type="button"
          className="ml-3 inline-flex items-center justify-center rounded-xl border border-white/10 p-2 text-xl text-zinc-200 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;