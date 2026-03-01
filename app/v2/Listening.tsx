import Image from "next/image";
import { motion } from "motion/react";

export default function Listening() {
  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-start z-10">
        <div>
          <p className="text-xs font-mono text-blue-400 uppercase tracking-widest">
            Listening To
          </p>
        </div>
        <div className="flex gap-1">
          <span className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
          <span className="w-1 h-1 rounded-full bg-blue-500 animate-pulse delay-75" />
          <span className="w-1 h-1 rounded-full bg-blue-500 animate-pulse delay-150" />
        </div>
      </div>

      {/* Main Content: Simulated Activity Player */}
      <div className="flex items-center gap-4 py-2 z-10">
        <div className="relative w-16 h-16 shrink-0">
          <Image
            src="/images/currently_reading.png"
            alt="Currently Reading"
            className="rounded-xl object-cover border border-white/10 group-hover:rotate-3 transition-transform"
            height={64}
            width={64}
          />
          <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-[#090909] flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
          </div>
        </div>

        <div className="overflow-hidden">
          <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest leading-none mb-1">
            ANDY WEIR
          </p>
          <p className="text-sm font-bold text-white truncate">
            Project Hail Mary
          </p>
        </div>
      </div>

      {/* Simulated Waveform / Progress */}
      <div className="flex items-end gap-[2px] h-6 z-10">
        {[0.4, 0.7, 1, 0.8, 0.5, 0.9, 0.6, 0.8, 0.4, 0.7, 0.9, 0.5].map(
          (h, i) => (
            <motion.div
              key={i}
              animate={{
                height: [
                  `${h * 100}%`,
                  `${Math.random() * 100}%`,
                  `${h * 100}%`,
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                delay: i * 0.1,
              }}
              className="flex-1 bg-blue-500/30 rounded-full"
            />
          ),
        )}
      </div>

      {/* Background Glow */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full group-hover:bg-blue-600/20 transition-colors" />
    </>
  );
}
