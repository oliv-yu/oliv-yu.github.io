import React from "react";
import Icon from "./Icon";

const PROJECTS_INFO = [
  {
    imagePath: "/images/waddle.png",
    title: "Waddle",
    description:
      "Waddle is basically a clone of NYT's popular Wordle game. Players can guess the 5-letter word and receive clues about the letter placement accuracy.",
    repoLink: "https://github.com/oliv-yu/waddle",
    demoLink: "https://oliv-yu.github.io/waddle/",
    skills: ["React", "SCSS", "HTML"],
  },
  {
    imagePath: "/images/boredapp.jpg",
    title: "Bored",
    description:
      "Bored is a simple dashboard of what to do when bored. Widgets include a weather report, a random activity generator, and a local business suggester.",
    repoLink: "https://github.com/oliv-yu/bored",
    demoLink: "https://oliv-yu.github.io/bored",
    skills: [
      "React",
      "HERE API",
      "Open Weather Map API",
      "Moment",
      "Axios",
      "SCSS",
    ],
  },
  {
    imagePath: "/images/doodle.png",
    title: "Doodle",
    description:
      "Doodle is a straight-forward drawing app similar to Microsoft Paint, where a painter can alter brush width and undo changes.",
    repoLink: "https://github.com/oliv-yu/doodle",
    demoLink: "https://oliv-yu.github.io/doodle",
    skills: ["Javascript", "CSS", "Next.js"],
  },
  {
    imagePath: "/images/interactivecomments.jpg",
    title: "Interactive Comments",
    description:
      "Interactive Comments is a frontendmentor.io challenge where users can comment, reply to, and upvote each other, as well as delete their own responses.",
    repoLink: "https://github.com/oliv-yu/interactive-comments",
    demoLink: "https://oliv-yu.github.io/interactive-comments",
    skills: ["React", "SCSS", "HTML"],
  },
];

function Link({ type, href }) {
  const linkData = {
    repo: {
      dimensions: "h-5 w-5",
      icon: "github",
      text: "Source Code",
    },
    demo: {
      dimensions: "h-5 w-7",
      icon: "laptop",
      text: "Live Demo",
    },
  };

  return (
    <a
      href={href}
      rel="noreferrer noopener"
      className="rounded-xl border-2 border-default-400 py-2 px-2 hover:bg-default-900 transition ease-in-and-out duration-300 transition-colors"
      target="_blank"
    >
      <div className="flex items-center text-xs gap-x-2">
        <Icon
          icon={linkData[type].icon}
          cssClass={"inline fill-default-50 " + linkData[type].dimensions}
        />
        <span>{linkData[type].text}</span>
        <Icon icon="arrowup" cssClass="inline fill-default-50 h-3 w-3" />
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <div className="projects-content">
      <ul>
        {PROJECTS_INFO.map(
          ({ imagePath, title, description, demoLink, repoLink, skills }) => (
            <li className="mb-2" key={title}>
              <div
                className="z-0 rounded-md transition motion-reduce:transition-none hover:bg-default-950/45"
                style={{ margin: "0 -20px" }}
              >
                <div className="group opacity-100 relative grid gap-4 transition-all sm:grid-cols-6 sm:gap-8 md:gap-4 p-[20px]">
                  <div className="z-10 sm:col-span-2">
                    <img
                      className="w-full h-[200px] object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30"
                      alt={`${title} Card`}
                      src={imagePath}
                    />
                  </div>
                  <div className="z-10 sm:col-span-4">
                    <h3>
                      <span className="inline-flex items-baseline font-medium leading-tight hover:text-default-500 focus-visible:text-default-500 transition ease-in-and-out duration-300 transition-colors">
                        <span>{title}</span>
                      </span>
                    </h3>

                    <p className="mt-2 text-sm leading-normal">{description}</p>

                    <div className="flex flex-wrap text-xs uppercase space-x-1 mt-2">
                      {skills.map((item) => (
                        <p
                          className="my-2"
                          key={`${title}-${item}-${Math.random()}`}
                        >
                          <span className="rounded-3xl border-1 border-slate-400 text-slate-400 py-1 px-2 hover:bg-slate-800 transition ease-in-and-out duration-100 transition-colors">
                            {item}
                          </span>
                        </p>
                      ))}
                    </div>

                    <div className="mt-4 flex gap-x-2">
                      <Link type="repo" href={repoLink} />

                      <Link type="demo" href={demoLink} />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
