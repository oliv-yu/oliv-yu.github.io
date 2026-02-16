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
      <div className="min-h-screen bg-slate-900 text-white p-6 font-sans selection:bg-blue-500">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-7 auto-rows-[180px]"
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="md:col-span-4 md:row-span-2 min-sm:col-span-1 min-sm:row-span-3 max-sm:col-span-1 max-sm:row-span-3 bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-[3rem] p-8 flex flex-col justify-end relative overflow-hidden group"
          >
            <div className="absolute top-8 right-8 text-xs tracking-[0.2em] text-blue-400 uppercase font-bold">
              Frontend Developer
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-4 bg-gradient-to-t from-white to-white/50 bg-clip-text">
              OLIVIA <br /> YU WONG
            </h1>
            <p className="text-xl text-neutral-200 max-w-md italic">
              Developing digital experiences through the lens of quality.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="md:col-span-1 md:row-span-3 min-sm:col-span-1 min-sm:row-span-2 max-sm:col-span-1 max-sm:row-span-2 bg-gradient-to-b from-cyan-600 to-blue-700 rounded-[3rem] p-8 flex flex-col justify-between shadow-[0_0_40px_-10px_rgba(147,51,234,0.3)]"
          >
            <Skills />
          </motion.div>

          <div className="md:col-span-3 md:row-span-2 relative bg-[#0a0a0a] rounded-[3rem] border border-white/10 ">
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
            className="md:col-span-2 md:row-span-1 min-sm:col-span-1 min-sm:row-span-1 bg-[#111] border border-white/5 rounded-[3rem] p-8 "
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
