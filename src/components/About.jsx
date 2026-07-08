const About = () => {
  return (
    <section className="px-2 py-16 sm:px-4">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl" id="about"> </h2>
          <p className="mt-3 text-zinc-400"></p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-zinc-900/70 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl md:p-10">
          <h3 className="mb-5 text-2xl font-semibold text-sky-400">About Me</h3>

          <div className="space-y-4 text-lg leading-8 text-zinc-300">
            <p>
              I&apos;m <span className="font-semibold text-white">Rohith S</span>, a Computer Science student passionate about building responsive and user-friendly web applications.

            </p>
            <p>
              I enjoy solving Data Structures & Algorithms problems and continuously strengthening my skills in React, JavaScript, HTML, and CSS.
            </p>
            <p>
               I'm currently seeking a Software Development Internship where I can contribute, learn from experienced engineers, and grow as a developer.
            </p>

          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h4 className="text-sm uppercase tracking-[0.2em] text-zinc-400">Education</h4>
              <p className="mt-2 text-white">B.E. Computer Science and Engineering</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h4 className="text-sm uppercase tracking-[0.2em] text-zinc-400">Location</h4>
              <p className="mt-2 text-white">Coimbatore,Tamil Nadu, India</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h4 className="text-sm uppercase tracking-[0.2em] text-zinc-400">Experience</h4>
              <p className="mt-2 text-white">Personal Projects</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h4 className="text-sm uppercase tracking-[0.2em] text-zinc-400">Interested In</h4>
              <p className="mt-2 text-white">Web Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;