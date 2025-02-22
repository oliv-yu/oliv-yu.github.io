import React from "react";
import About from "./components/About";
import Introduction from "./components/Introduction";
import PageLinks from "./components/PageLinks";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";

export default function Page() {
  return (
    <div className="text-default-50 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="tracking-wider lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[33%] lg:flex-col lg:justify-between lg:py-24">
          <div>
            <Introduction />

            <PageLinks
              links={[
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
              ]}
            />
          </div>

          <SocialLinks />
        </header>

        <main id="content" className="pt-24 lg:w-[65%] lg:py-24">
          <section
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 tracking-wide"
            aria-label="About"
          >
            <h1 className="text-xs font-bold uppercase tracking-widest mb-3">
              About
            </h1>

            <About />
          </section>

          <section
            id="skills"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 tracking-wide"
            aria-label="Skills"
          >
            <h1 className="text-xs font-bold uppercase tracking-widest mb-3 ">
              Skills
            </h1>

            <Skills />
          </section>

          <section
            id="projects"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 tracking-wide"
            aria-label="Projects"
          >
            <h1 className="text-xs font-bold uppercase tracking-widest mb-5">
              Projects
            </h1>

            <Projects />
          </section>

          <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
            <p className="after:content-['__\01F643']">
              Coded in Visual Studio Code, built with Next.js and Tailwind CSS,
              deployed to GitHub Pages
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
