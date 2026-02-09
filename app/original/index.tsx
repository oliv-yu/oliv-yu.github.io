import React, { useState, useEffect } from "react";
import About from "./About";
import Introduction from "./Introduction";
import JumpGame from "./JumpGame";
import PageLinks from "./PageLinks";
import Projects from "./Projects";
import Skills from "./Skills";
import SocialLinks from "./SocialLinks";
import * as motion from "motion/react-client";
import { CircleLoader } from "./LoaderIcon";

export default function () {
  const [isLoading, setIsLoading] = useState(true);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  setTimeout(() => {
    setIsLoading(false);
  }, 2250);

  useEffect(() => {
    const handleMouse = (event: MouseEvent) => {
      setPointer({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouse);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
    };
  });

  return (
    <>
      {isLoading ? (
        <div className="grid h-screen place-content-center">
          <CircleLoader />
        </div>
      ) : (
        <div className="bg-zinc-900 text-default-100 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
          <div
            className="h-[600px] w-[600px] pointer-events-none opacity-5 fixed rounded-[50%]"
            style={{
              left: pointer.x,
              top: pointer.y,
              background: `radial-gradient(circle at center, #7c2d12 0, #1e3a8a, #1e1b4b 100%)`,
              transform: "translate(-50%, -50%)",
            }}
          />

          <div className="lg:flex lg:justify-between lg:gap-4">
            <header className="tracking-wider lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[33%] lg:flex-col lg:justify-between lg:py-24">
              <div>
                <Introduction />

                <PageLinks
                  links={[
                    { name: "About", href: "#about" },
                    { name: "Skills", href: "#skills" },
                    { name: "Projects", href: "#projects" },
                    { name: "Game", href: "#game" },
                  ]}
                />
              </div>

              <SocialLinks />
            </header>

            <main id="content" className="pt-24 lg:w-[65%] lg:py-24">
              <motion.div
                initial={{ opacity: 0, marginBottom: "10px" }}
                animate={{ opacity: 1, marginBottom: "0px" }}
                transition={{ duration: 0.25, ease: "easeIn", delay: 1 }}
              >
                <section
                  id="about"
                  className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 tracking-wide"
                  aria-label="About"
                >
                  <h1 className="text-md font-bold uppercase tracking-widest mb-3">
                    About
                  </h1>

                  <About />
                </section>

                <section
                  id="skills"
                  className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 tracking-wide"
                  aria-label="Skills"
                >
                  <h1 className="text-md font-bold uppercase tracking-widest mb-3 ">
                    Skills
                  </h1>

                  <Skills />
                </section>

                <section
                  id="projects"
                  className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 tracking-wide"
                  aria-label="Projects"
                >
                  <h1 className="text-md font-bold uppercase tracking-widest mb-5">
                    Projects
                  </h1>

                  <Projects />
                </section>

                <section
                  id="game"
                  className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 tracking-wide"
                  aria-label="Game"
                >
                  <h1 className="text-md font-bold uppercase tracking-widest mb-3">
                    Game
                  </h1>

                  <div className="mb-4 italic text-xs/6">
                    <p>Thanks for stopping by!</p>
                    <p>How about I interest you in a game?</p>
                    <p>
                      See how long Capybara can last dodging the rocks. Click or
                      press &apos;Space&apos; / &apos;Enter&apos; to jump.
                    </p>
                  </div>

                  <JumpGame />
                </section>

                <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
                  <p className="after:content-['__\01F643']">
                    Coded in Visual Studio Code, built with Next.js and Tailwind
                    CSS, deployed to GitHub Pages
                  </p>
                </footer>
              </motion.div>
            </main>
          </div>
        </div>
      )}
    </>
  );
}
