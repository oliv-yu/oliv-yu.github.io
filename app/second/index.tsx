import MagneticWrapper from "./MagneticWrapper";
import { motion } from "motion/react";
import Projects from "./Projects";

const SKILLS_LIST = [
  {
    skills: [
      "JavaScript",
      "TypeScript",
      "ReactJS",
      "HTML",
      "CSS",
      "Tailwind",
      "Sass",
      "Node.js",
      "Storybook",
      "Git",
    ],
    title: "Toolkit",
  },
  { skills: ["Playwright", "Jest", "Selenium"], title: "Testing" },
];

export default function index() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 font-sans selection:bg-blue-500">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-4 auto-rows-[180px]">
        {/* 1. THE HERO (Creative & Bold) */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-4 md:row-span-2 min-sm:col-span-1 min-sm:row-span-3 max-sm:col-span-1 max-sm:row-span-3 bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-[3rem] p-12 flex flex-col justify-end relative overflow-hidden group"
        >
          <div className="absolute top-8 right-8 text-xs tracking-[0.2em] text-blue-400 uppercase font-bold">
            Frontend Developer
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-4 bg-gradient-to-t from-white to-white/50 bg-clip-text">
            OLIVIA <br /> YU WONG
          </h1>
          <p className="text-xl text-neutral-200 max-w-md italic">
            Developing digital experiences through the lens of quality and
            motion.
          </p>
        </motion.div>

        {/* 2. THE "GLOW" CARD (Skills) */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          className="md:col-span-1 md:row-span-3 min-sm:col-span-1 min-sm:row-span-2 max-sm:col-span-1 max-sm:row-span-2 bg-gradient-to-b from-cyan-600 to-blue-700 rounded-[3rem] p-8 flex flex-col justify-between shadow-[0_0_40px_-10px_rgba(147,51,234,0.3)]"
        >
          <div className="text-4xl">🚀</div>
          <div>
            {SKILLS_LIST.map(({ title, skills }) => (
              <div className="pb-4" key={title}>
                <h3 className="text-xl font-bold leading-tight mb-4">
                  {title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] uppercase tracking-widest bg-black/20 px-3 py-1 rounded-full border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="md:col-span-3 md:row-span-2 bg-[#111] border border-white/5 rounded-[3rem] p-8 flex items-center justify-between group"></div>

        {/* 3. FUN FACT FILLER */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="md:col-span-1 md:row-span-1 bg-[#111] border border-white/5 rounded-[3rem] p-8 flex items-center justify-between group"
        >
          <div>
            <p className="text-xs text-blue-400 font-mono mb-1">// Location</p>
            <h3 className="text-md font-medium text-neutral-200 mb-2 bricolage-grotesque">
              Orange County 😎
            </h3>
          </div>
        </motion.div>

        {/* 4. THE HISTORY CARD (Experience) */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="md:col-span-2 md:row-span-1 min-sm:col-span-1 min-sm:row-span-1 bg-[#111] border border-white/5 rounded-[3rem] p-8 "
        >
          <p className="text-xs text-blue-400 font-mono mb-1">// History</p>

          <div className="flex items-center justify-between">
            <div>
              <div className="mb-1">
                <p className="text-xs text-blue-400 font-mono">
                  2019 - Present
                </p>
                <h5 className="text-md font-medium text-neutral-200">
                  Frontend Engineer @ Liferay
                </h5>
              </div>
              <div>
                <p className="text-xs text-blue-400 font-mono">2015 - 2019</p>
                <h5 className="text-md font-medium text-neutral-200">
                  Quality Assurance Engineer @ Liferay
                </h5>
              </div>
            </div>
            <a
              href="http://www.liferay.com"
              className="h-12 w-12 rounded-full border border-white/10 flex items-center cursor-pointer justify-center hover:bg-white hover:text-black transition-colors z-10"
            >
              →
            </a>
          </div>
        </motion.div>

        {/* 5. PROJECTS (Visual Focus) */}
        <Projects />

        {/* 6. CONNECT CARD (Call to Action) */}
        <div className="md:col-span-2 md:row-span-1">
          <MagneticWrapper>
            <motion.div
              className=" bg-[#EBFF00] rounded-[3rem] p-8 flex items-center justify-center text-black"
              whileHover={{ rotate: -2 }}
            >
              <span className="text-3xl font-black uppercase tracking-tighter">
                Let's Create!
              </span>
            </motion.div>
          </MagneticWrapper>
        </div>
      </div>
    </div>
  );
}
