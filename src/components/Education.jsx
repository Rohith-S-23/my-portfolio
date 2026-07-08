import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section className="px-2 py-16 sm:px-4" id="education">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl" id="education">Education</h2>
          <p className="mt-3 text-zinc-400">My academic journey</p>
        </div>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-white/10 bg-zinc-900/70 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl md:flex md:items-start md:gap-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-xl text-sky-400 md:mb-0">
              <FaGraduationCap />
            </div>
            <div>
              <span className="text-sm uppercase tracking-[0.25em] text-sky-400">2024 - Present</span>
              <h3 className="mt-2 text-xl font-semibold text-white">B.E. Computer Science & Engineering</h3>
              <h4 className="mt-1 text-zinc-300">KIT-Kalignar karunanidhi Institute of Technology, Coimbatore.</h4>
              <p className="mt-3 max-w-3xl text-zinc-400">
                Currently pursuing Bachelor&apos;s degree with focus on Data Structures, Algorithms, Web Development, Database Management Systems and Software Engineering.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-zinc-900/70 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl md:flex md:items-start md:gap-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-xl text-sky-400 md:mb-0">
              <FaGraduationCap />
            </div>
            <div>
              <span className="text-sm uppercase tracking-[0.25em] text-sky-400">2022 - 2024</span>
              <h3 className="mt-2 text-xl font-semibold text-white">Higher Secondary Education</h3>
              <h4 className="mt-1 text-zinc-300">Literacy Mission School, Tiruppur.</h4>
              <p className="mt-3 max-w-3xl text-zinc-400">
                Completed Higher Secondary with Mathematics, Physics, Chemistry and Computer Science.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-zinc-900/70 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl md:flex md:items-start md:gap-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-xl text-sky-400 md:mb-0">
              <FaGraduationCap />
            </div>
            <div>
              <span className="text-sm uppercase tracking-[0.25em] text-sky-400">2021 - 2022</span>
              <h3 className="mt-2 text-xl font-semibold text-white">Secondary School</h3>
              <h4 className="mt-1 text-zinc-300">Literacy Mission School, Tiruppur.</h4>
              <p className="mt-3 max-w-3xl text-zinc-400">
                Built a strong academic foundation while developing an interest in programming and technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;