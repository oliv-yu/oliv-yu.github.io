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
      className="col-span-1 md:col-span-2 md:row-span-2 min-h-[350px] md:min-h-0 md:h-full bg-black-900 rounded-[3rem] relative overflow-hidden group shadow-lg shadow-blue-500/50"
    >
      <div className="absolute top-8 right-8 z-20 text-xs tracking-[0.2em] text-blue-800 uppercase font-bold">
        PROJECT
      </div>

      <img
        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
        alt={`${title} Card`}
        src={imagePath}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

      <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 z-20">
        <div className="flex justify-between items-end mb-2">
          <span className="text-2xl md:text-3xl font-bold">{title}</span>

          <div className="flex gap-3">
            <Icon
              icon="github"
              cssClass="w-6 h-6 fill-white hover:fill-blue-400 transition-colors"
              href={repoLink}
            />
            <Icon
              icon="darkLink"
              cssClass="w-6 h-6 fill-white hover:fill-blue-400 transition-colors"
              href={demoLink}
            />
          </div>
        </div>

        <p className="text-sm md:text-base text-white/70 line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {skills.map((item) => (
            <span
              key={item}
              className="text-[10px] md:text-xs uppercase tracking-wider rounded-full border border-white/20 bg-white/5 py-1 px-3 text-neutral-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function () {
  return PROJECTS_INFO.map((data) => <Project key={data.title} {...data} />);
}
