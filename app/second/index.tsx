import { motion } from "motion/react";
import DecorativeAura from "./DecorativeAura";
import History from "./History";
import JumpGame from "./JumpGame";
import Location from "./Location";
import Projects from "./Projects";
import ScrollProgress from "./ScrollProgress";
import SocialLinks from "./SocialLinks";
import SpotlightLab from "./SpotlightLab";
import Skills from "./Skills";

export default function index() {
  return (
    <>
      <DecorativeAura />

      <ScrollProgress />

      <div className="min-h-screen bg-slate-950 text-white p-6 font-sans selection:bg-blue-500">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-4 md:gap-7 auto-rows-auto md:auto-rows-[180px]"
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="col-span-1 md:col-span-4 md:row-span-2 bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-10 flex flex-col justify-end relative overflow-hidden group min-h-[300px] md:min-h-0"
          >
            {/* Label: Relative on mobile to prevent overlap, absolute on desktop */}
            <div className="relative md:absolute md:top-8 md:right-8 text-[10px] tracking-[0.2em] text-blue-400 uppercase font-bold mb-4 md:mb-0">
              Frontend Developer
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-4 bg-gradient-to-t from-white to-white/50 bg-clip-text text-transparent">
              OLIVIA <br /> YU WONG
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 max-w-md italic">
              Developing digital experiences through the lens of quality.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="col-span-1 md:col-span-1 md:row-span-3 bg-gradient-to-b from-cyan-600 to-blue-700 rounded-[2.5rem] md:rounded-[3rem] p-8 flex flex-col justify-between shadow-[0_0_40px_-10px_rgba(6,182,212,0.3)]"
          >
            <Skills />
          </motion.div>

          <div className="col-span-1 md:col-span-3 md:row-span-2 relative bg-[#0a0a0a] rounded-[2.5rem] md:rounded-[3rem] border border-white/10 min-h-[250px] md:min-h-0">
            <SpotlightLab />
          </div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="md:col-span-1 md:row-span-1 bg-[#111] border border-white/5 rounded-[3rem] p-8 flex items-center justify-between group relative overflow-hidden group"
          >
            <Location />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="col-span-1 md:col-span-2 md:row-span-1 bg-[#111] border border-white/5 rounded-[2.5rem] md:rounded-[3rem] p-8"
          >
            <History />
          </motion.div>

          <Projects />

          <div className="md:col-span-4 md:row-span-1 flex justify-center">
            <SocialLinks />
          </div>

          <div className="mb-4 italic text-xs/6">
            <p>Thanks for stopping by!</p>
            <p>How about I interest you in a game?</p>
            <p>
              See how long Capybara can last dodging the rocks. Click or press
              &apos;Space&apos; / &apos;Enter&apos; to jump.
            </p>
          </div>

          <div className="md:col-span-4 md:row-span-2 border-3 border-white/5 border-dashed rounded-[3rem] font-mono relative focus:outline-0 w-full h-full">
            <JumpGame />
          </div>
        </motion.div>
      </div>
    </>
  );
}
