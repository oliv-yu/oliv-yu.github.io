import { motion } from "motion/react";
import Icon from "./Icon";
import React from "react";

const PROJECTS_INFO = [
  {
    imagePath: "/images/waddle.png",
    title: "Waddle",
    description:
      "A clone of NYT's popular Wordle game. Players can guess the 5-letter word and receive clues about the letter placement accuracy.",
    repoLink: "https://github.com/oliv-yu/waddle",
    demoLink: "https://oliv-yu.github.io/waddle/",
    skills: ["React", "SCSS", "HTML"],
  },
  {
    imagePath: "/images/boredapp.jpg",
    title: "Bored",
    description:
      "A simple dashboard of what to do when bored. Widgets include a weather report, a random activity generator, and a local business suggester.",
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
      "A straight-forward drawing app similar to Microsoft Paint, where a painter can alter brush width and undo changes.",
    repoLink: "https://github.com/oliv-yu/doodle",
    demoLink: "https://oliv-yu.github.io/doodle",
    skills: ["Javascript", "CSS", "Next.js"],
  },
  {
    imagePath: "/images/interactivecomments.jpg",
    title: "Interactive Comments",
    description:
      "A frontendmentor.io challenge where users can comment, reply to, and upvote each other, as well as delete their own responses.",
    repoLink: "https://github.com/oliv-yu/interactive-comments",
    demoLink: "https://oliv-yu.github.io/interactive-comments",
    skills: ["React", "SCSS", "HTML"],
  },
];

function Project({
  imagePath,
  title,
  description,
  repoLink,
  demoLink,
  skills,
}: {
  imagePath: string;
  title: string;
  description: string;
  repoLink: string;
  demoLink: string;
  skills: string[];
}) {
  const className = `absolute inset-0 bg-[url('/images/waddle.png')] bg-cover bg-center opacity-60 group-hover:scale-110 transition-transform duration-700`;

  return (
    <motion.div
      whileHover={{ scale: 0.98 }}
      className="md:col-span-2 md:row-span-2 min-sm:col-span-1 min-sm:row-span-2 min-sm:col-span-1 min-sm:row-span-2 max-sm:col-span-1 max-sm:row-span-2 bg-neutral-900 rounded-[3rem] relative overflow-hidden group"
    >
      <div className="absolute top-8 right-8 text-xs tracking-[0.2em] text-blue-400 uppercase font-bold">
        PROJECT
      </div>
      <img
        className="absolute inset-0 opacity-60 group-hover:scale-110 transition-transform duration-700"
        alt={`${title} Card`}
        src={imagePath}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      <div className="absolute bottom-8 left-8 right-8">
        <div className="justify-between mb-1 text-3xl flex">
          <span className="font-bold">{title}</span>

          <div>
            <Icon
              icon="github"
              cssClass="inline-block w-[1em] h-[1em] fill-default-100 hover:fill-slate-800 mx-2"
              href={repoLink}
            />
            <Icon
              cssClass="inline-block w-[1em] h-[1em] fill-default-100 hover:fill-slate-800"
              href={demoLink}
              icon="darkLink"
            />
          </div>
        </div>
        <span className="text-white/60">{description}</span>

        <div className="flex flex-wrap text-xs uppercase space-x-1 mt-2">
          {skills.map((item) => (
            <p className="my-2" key={`${title}-${item}-${Math.random()}`}>
              <span className="rounded-3xl border-1 border-slate-400 text-neutral-400 py-1 px-2 hover:bg-neutral-600 transition ease-in-and-out duration-100 transition-colors">
                {item}
              </span>
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function () {
  return PROJECTS_INFO.map((data) => <Project key={data.title} {...data} />);
}
