import React from "react";
import * as motion from "motion/react-client";

const HexagonLoader = () => (
  <motion.div
    animate={{
      scale: [0.75, 1, 0],
    }}
    transition={{
      duration: 0.5,
      delay: 1.5,
      ease: "easeInOut",
      times: [0, 0.4, 1],
    }}
  >
    <svg
      className="animate-wiggle h-24 w-24 stroke-default-500"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      <g>
        <path
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fillOpacity="0"
          d="M 50, 5
            L 11, 27
            L 11, 72
            L 50, 95
            L 89, 73
            L 89, 28 z"
        />
      </g>
    </svg>
  </motion.div>
);

const CircleLoader = () => (
  <motion.svg
    width="150"
    height="150"
    viewBox="0 0 50 50"
    initial="hidden"
    animate="visible"
  >
    <motion.circle
      className="circle-path"
      cx="25"
      cy="25"
      r="20"
      stroke="oklch(0.707 0.165 254.624)"
      animate={{
        scale: [0.75, 1, 0],
      }}
      transition={{
        duration: 0.5,
        delay: 1.5,
        ease: "easeInOut",
        times: [0, 0.4, 1],
      }}
      variants={{
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i: number) => {
          const delay = i * 0.5;
          return {
            pathLength: 1,
            opacity: 1,
            transition: {
              pathLength: {
                delay,
                type: "spring",
                duration: 1.5,
                bounce: 0,
              },
              opacity: { delay, duration: 0.01 },
            },
          };
        },
      }}
      custom={1}
      style={{
        strokeWidth: 7,
        strokeLinecap: "round",
        fill: "transparent",
      }}
    />
  </motion.svg>
);

const SquareLoader = () => (
  <motion.div
    style={{
      width: 50,
      height: 50,
      backgroundColor: "oklch(0.488 0.243 264.376)",
      borderRadius: 5,
    }}
    animate={{
      rotate: [0, 180, 0],
      scale: [1, 1, 2, 1, 0],
      borderRadius: ["5%", "50%", "50%"],
    }}
    transition={{
      duration: 1.5,
      delay: 0.5,
      ease: "easeInOut",
      times: [0, 0.2, 0.8, 1],
    }}
  />
);

export { CircleLoader, HexagonLoader, SquareLoader };
