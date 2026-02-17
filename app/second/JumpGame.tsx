import React, { useEffect, useRef, useState, KeyboardEvent } from "react";
import "./jumpGame.css";

function JumpGame() {
  const capybaraRef = useRef(null);
  const rockRef = useRef(null);
  const jumpGameRef = useRef(null);
  const [score, setScore] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const jump = () => {
    if (
      !!capybaraRef.current &&
      capybaraRef.current.classList.contains("run")
    ) {
      capybaraRef.current.classList.replace("run", "jump");

      setTimeout(() => {
        capybaraRef.current.classList.replace("jump", "run");
      }, 500);
    }
  };

  const startRun = () => {
    setIsRunning(true);

    if (!!rockRef.current && rockRef.current.classList != "block") {
      rockRef.current.classList.add("block");
    }

    if (
      !!capybaraRef.current &&
      !capybaraRef.current.classList.contains("run")
    ) {
      capybaraRef.current.classList.add("run");
    }
  };

  const stopRun = () => {
    setIsRunning(false);

    if (!!rockRef.current && rockRef.current.classList == "block") {
      rockRef.current.classList.remove("block");
    }

    if (
      !!capybaraRef.current &&
      capybaraRef.current.classList.contains("run")
    ) {
      capybaraRef.current.classList.remove("run");
    }
  };

  const handleKeyDownJump = (event: KeyboardEvent<HTMLDivElement>) => {
    if ((event.code === "Space" || event.code === "Enter") && isRunning) {
      event.preventDefault();

      jump();
    }
  };

  const handleClick = () => {
    if (isRunning) {
      jump();
    }
  };

  const handleStart = () => {
    setScore(0);
    startRun();

    document.getElementById("jumpGame").focus();
  };

  useEffect(() => {
    const keepRunning = setInterval(() => {
      const jumpGameHeight = jumpGameRef.current.clientHeight;

      const capybaraYPosition = parseInt(
        getComputedStyle(capybaraRef.current).getPropertyValue("top"),
      );

      const rockXPosition = parseInt(
        getComputedStyle(rockRef.current).getPropertyValue("left"),
      );

      if (
        rockXPosition < 60 &&
        rockXPosition > 10 &&
        capybaraYPosition >= jumpGameHeight - 100
      ) {
        stopRun();
      }
    }, 10);

    return () => {
      clearInterval(keepRunning);
    };
  });

  useEffect(() => {
    if (isRunning) {
      const keepScore = setInterval(() => {
        setScore(score + 1);
      }, 1000);

      return () => {
        clearInterval(keepScore);
      };
    }
  });

  return (
    <div
      id="jumpGame"
      ref={jumpGameRef}
      className="w-full h-full text-center rounded-[3rem] focus-visible:outline-none"
      onClick={handleClick}
      onKeyDown={handleKeyDownJump}
      tabIndex={0}
    >
      {!isRunning && (
        <button
          className="absolute cursor-pointer border-1 border-dashed p-2 hover:bg-white hover:text-black w-[80%] top-[20%] left-[10%] z-10"
          onClick={handleStart}
        >
          {score > 0
            ? `Congrats! You lasted ${score}sec. Restart.`
            : "Click to start!"}
        </button>
      )}
      <span>Time elapsed : {score}s</span>

      <div id="capybara" ref={capybaraRef}></div>
      <div id="rock" ref={rockRef}></div>
    </div>
  );
}

export default JumpGame;
