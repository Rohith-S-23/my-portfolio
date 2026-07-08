import "./App.css";
import { useEffect, useRef, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const sectionRefs = useRef([]);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const sections = sectionRefs.current.filter(Boolean);
    let isAnimating = false;
    let timeoutId = null;

    const scrollToSection = (index) => {
      if (!sections[index] || isAnimating) return;

      isAnimating = true;
      sections[index].scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        isAnimating = false;
      }, 900);
    };

    const handleWheel = (event) => {
      const delta = event.deltaY;
      if (Math.abs(delta) < 40 || isAnimating) return;

      event.preventDefault();

      const currentIndex = sections.findIndex((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top >= -140 && rect.top <= 140;
      });

      if (currentIndex === -1) return;

      const nextIndex = delta > 0
        ? Math.min(currentIndex + 1, sections.length - 1)
        : Math.max(currentIndex - 1, 0);

      if (nextIndex !== currentIndex) {
        scrollToSection(nextIndex);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const sections = sectionRefs.current.filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(Number(visibleEntry.target.dataset.index));
        }
      },
      {
        threshold: [0.3, 0.5, 0.7],
        rootMargin: "-10% 0px -35% 0px"
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="bg-blur bg1"></div>
        <div className="bg-blur bg2"></div>
      </div>

      <div className="relative min-h-screen overflow-hidden">
        <Navbar />

        <div className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 md:flex">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <button
              key={index}
              type="button"
              aria-label={`Jump to section ${index + 1}`}
              onClick={() => sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" })}
              className={`h-3 w-3 rounded-full border border-white/30 transition-all duration-300 ${
                activeSection === index ? "scale-125 bg-white shadow-lg shadow-cyan-400/20" : "bg-white/25 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        <main className="mx-auto flex max-w-7xl flex-col px-4 pb-16 sm:px-6 lg:px-8">
          <section data-index="0" className="scroll-mt-24" ref={(el) => (sectionRefs.current[0] = el)}><Hero /></section>
          <section data-index="1" className="scroll-mt-24" ref={(el) => (sectionRefs.current[1] = el)}><About /></section>
          <section data-index="2" className="scroll-mt-24" ref={(el) => (sectionRefs.current[2] = el)}><Skills /></section>
          <section data-index="3" className="scroll-mt-24" ref={(el) => (sectionRefs.current[3] = el)}><Projects /></section>
          <section data-index="4" className="scroll-mt-24" ref={(el) => (sectionRefs.current[4] = el)}><Education /></section>
          <section data-index="5" className="scroll-mt-24" ref={(el) => (sectionRefs.current[5] = el)}><Contact /></section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;