import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";

export default function SpotlightLab() {
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const resetMouse = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetMouse}
      className="w-full h-full overflow-hidden flex items-center justify-center cursor-crosshair"
    >
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#444_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* 1. IDLE WRAPPER: Handles the floating loop */}
      <motion.div
        animate={
          !isHovered
            ? {
                y: [0, -20, 0],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }
            : { y: 0 }
        }
      >
        {/* 2. MOUSE TARGET: Handles the spring physics */}
        <motion.div
          style={{
            x: springX,
            y: springY,
            rotate: isHovered ? 15 : 0, // Fun lean when you grab it
          }}
          className="z-10 w-20 h-20 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-[2rem] shadow-[0_0_50px_rgba(245,158,11,0.3)] flex items-center justify-center border border-white/20"
        >
          <motion.span
            animate={{ scale: isHovered ? 1.2 : 1 }}
            className="text-white font-bold text-xl select-none"
          >
            ^_^
          </motion.span>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-10 flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
            System_Live
          </p>
        </div>
        <p className="text-sm font-medium text-white/60">Interaction Lab</p>
      </div>
    </motion.div>
  );
}
