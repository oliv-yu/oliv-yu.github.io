import { motion, useScroll, useSpring, useTransform } from "motion/react";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  // useSpring makes the bar feel "organic" and bouncy rather than rigid
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // This hooks the color to the scroll position
  // It will transition from Blue to Neon Yellow as you reach the bottom
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#5590f7", "#EBFF00"],
  );

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-2 origin-left z-50"
      style={{ scaleX, backgroundColor }}
    />
  );
};

export default ScrollProgress;
