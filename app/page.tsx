import React from "react";
import Icon from "./components/Icon";

export default function Page() {
  return (
    <div className="text-blue-50 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="tracking-wider lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[33%] lg:flex-col lg:justify-between lg:py-24">
          <div>
            <div className="mb-4 text-xl font-medium">
              <span className="after:content-['__\01F44B']">Hi!</span>
              <span className="ml-2">My name is...</span>
            </div>
            <h1 className="text-4xl font-bold sm:text-5xl hover:text-blue-700 transition ease-in-and-out duration-600 transition-colors">
              Olivia Yu Wong
            </h1>
            <h2 className="mt-3 text-lg font-medium sm:text-xl w-sm">
              I'm a <span className="text-blue-400">frontend developer</span>.
            </h2>

            <nav className="nav hidden lg:block" aria-label="In-page links">
              <ul className="mt-16 w-max">
                {[
                  { name: "About Me", href: "#about" },
                  { name: "Skills", href: "#skills" },
                  { name: "Projects", href: "#projects" },
                ].map((item) => (
                  <li key={`link-${item.name}`}>
                    <a
                      className="group flex items-center py-3 active"
                      href={item.href}
                    >
                      <span className="nav-line mr-4 h-px w-8 bg-blue-50 transition-all group-hover:w-16 group-hover:bg-blue-100 group-focus-visible:w-16 group-focus-visible:bg-blue-100 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-blue-50 group-hover:text-blue-400 group-focus-visible:text-blue-500">
                        {item.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
            {[
              {
                name: "GitHub",
                icon: "github",
                link: "https://github.com/oliv-yu",
              },
              {
                name: "LinkedIn",
                icon: "linkedin",
                link: "https://www.linkedin.com/in/oliviayu/",
              },
              {
                name: "Email",
                icon: "email",
                link: "mailto:olivyu@gmail.com",
              },
            ].map((item, idx) => (
              <li
                className="mr-4 shrink-0 text-lg"
                key={`link-${idx}-${item.name}`}
              >
                <a
                  className="block "
                  href={item.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${item.name} (opens a new tab)`}
                  title={item.name}
                >
                  <span className="sr-only">{item.name}</span>

                  <Icon
                    icon={item.icon}
                    cssClass="fill-blue-50 h-6 w-6 hover:fill-blue-300 transition ease-in-and-out duration-600 transition-colors"
                  />
                </a>
              </li>
            ))}
          </ul>
        </header>

        <main id="content" className="pt-24 lg:w-[65%] lg:py-24">
          <section
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 tracking-wide"
            aria-label="About me"
          >
            <h1 className="text-xs font-bold uppercase tracking-widest mb-3">
              About Me
            </h1>

            <div className="about-me-content">
              <p className="mb-4">
                I'm a developer based in Southern California. I originally
                started at
                <a className="ml-1 mr-1" href="https://www.liferay.com/">
                  <span className="text-blue-400 font-bold">Liferay</span>
                </a>
                as a QA engineer and later switched to frontend development. I
                love the creativity and problem solving that comes with the
                work, making sure that the user has an excellent experience on
                the product.
              </p>
              <p className="mb-4">
                Currently, I am on the search infrastructure team at Liferay,
                where I contribute to the creation and maintenance of UI
                components for search optimization tools and search widgets. I
                also assist in functional testing and test analysis.
              </p>
              <p className="mb-4">
                My other interests include
                <span className="before:content-['__\1F4DA__']">reading </span>
                (mystery, classic literature, fantasy),
                <span className="before:content-['__\1F3A7__']">
                  listening{" "}
                </span>
                to podcasts (Planet Money, Freakonomics, Stuff You Should Know),
                making
                <span className="before:content-['__\1F9F6__']">crochet </span>
                hats and amigurumi, and giving my reluctant
                <span className="before:content-['__\1F408__']">cat </span>
                hugs & kisses.
              </p>
            </div>
          </section>

          <section
            id="skills"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 font-mono text-xs font-bold"
            aria-label="Skills"
          >
            <h1 className="text-xs font-bold uppercase tracking-widest mb-3 ">
              Skills
            </h1>

            <div className="skills-content flex flex-wrap tracking-wide">
              {[
                "JavaScript",
                "React",
                "CSS3",
                "HTML5",
                "Git",
                "Tailwind",
                "Sass",
                "Playwright",
              ].map((item) => {
                return (
                  <p className="my-4">
                    <span className="rounded-3xl border-2 border-blue-400 py-2 px-3 mr-3 hover:bg-blue-900 transition ease-in-and-out duration-600 transition-colors">
                      {item}
                    </span>
                  </p>
                );
              })}
            </div>
          </section>

          <section
            id="projects"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 tracking-wide"
            aria-label="Projects"
          >
            <h1 className="text-xs font-bold uppercase tracking-widest mb-5">
              Projects
            </h1>

            <div className="projects-content">
              <ul>
                {[
                  {
                    imagePath: "/images/waddle.png",
                    title: "Waddle",
                    description:
                      "Waddle is basically a clone of NYT's popular Wordle game. Players can guess the 5-letter word and receive clues about the letter placement accuracy.",
                    repoLink: "https://github.com/oliv-yu/waddle",
                    demoLink: "https://oliv-yu.github.io/waddle/",
                  },
                  {
                    imagePath: "/images/boredapp.jpg",
                    title: "Bored",
                    description:
                      "Bored is a simple dashboard of what to do when bored. Widgets include a weather report, a random activity generator, and a local business suggester.",
                    repoLink: "https://github.com/oliv-yu/bored",
                    demoLink: "https://oliv-yu.github.io/bored",
                  },
                  {
                    imagePath: "/images/doodle.png",
                    title: "Doodle",
                    description:
                      "Doodle is a straight-forward drawing app similar to Microsoft Paint, where a painter can alter brush width and undo changes.",
                    repoLink: "https://github.com/oliv-yu/doodle",
                    demoLink: "https://oliv-yu.github.io/doodle",
                  },
                  {
                    imagePath: "/images/interactivecomments.jpg",
                    title: "Interactive Comments",
                    description:
                      "Interactive Comments is a frontendmentor.io challenge where users can comment, reply to, and upvote each other, as well as delete their own responses.",
                    repoLink: "https://github.com/oliv-yu/interactive-comments",
                    demoLink: "https://oliv-yu.github.io/interactive-comments",
                  },
                ].map(
                  ({ imagePath, title, description, demoLink, repoLink }) => (
                    <li className="mb-12" key={title}>
                      <div className="z-0 rounded-md transition motion-reduce:transition-none hover:bg-blue-950/45">
                        <div className="group opacity-100 relative grid gap-4 pb-1 transition-all sm:grid-cols-6 sm:gap-8 md:gap-4">
                          <div className="z-10 sm:col-span-2">
                            <img
                              className="aspect-3/2 object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30"
                              alt="Waddle card"
                              src={imagePath}
                            />
                          </div>
                          <div className="z-10 sm:col-span-4">
                            <h3>
                              <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-blue-300 focus-visible:text-blue-300 sm:mt-2">
                                <span>{title}</span>
                              </span>
                            </h3>

                            <p className="mt-2 text-sm leading-normal">
                              {description}
                            </p>

                            <div className="mt-6 flex">
                              <a
                                href={demoLink}
                                rel="noreferrer noopener"
                                className="rounded-xl border-2 border-slate-400 py-2 px-2 mr-3 text-xs hover:bg-slate-900 transition ease-in-and-out duration-600 transition-colors flex items-center gap-x-2"
                                target="_blank"
                              >
                                <Icon
                                  icon="laptop"
                                  cssClass="inline fill-blue-50 h-6 w-9"
                                />
                                <div>
                                  <span className="sm:ml-1">Live Demo</span>
                                </div>
                              </a>

                              <a
                                href={repoLink}
                                rel="noreferrer noopener"
                                className="rounded-xl border-2 border-slate-400 py-2 px-2 mr-3 text-xs hover:bg-slate-900 transition ease-in-and-out duration-600 transition-colors flex items-center gap-x-2"
                                target="_blank"
                              >
                                <Icon
                                  icon="github"
                                  cssClass="inline fill-blue-50 h-6 w-6"
                                />
                                <div>
                                  <span className="sm:ml-1">Source Code</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                )}
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
