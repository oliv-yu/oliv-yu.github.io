import React from "react";

const SKILLS_LIST = [
  "JavaScript",
  "React",
  "CSS3",
  "HTML5",
  "Git",
  "Tailwind",
  "Sass",
  "Playwright",
];

export default function Skills() {
  return (
    <div className="skills-content flex flex-wrap font-mono text-xs font-bold">
      {SKILLS_LIST.map((item) => {
        return (
          <p className="my-4" key={`skill-${item}`}>
            <span className="rounded-3xl border-2 border-default-400 py-2 px-3 mr-3 hover:bg-default-900 transition ease-in-and-out duration-300 transition-colors">
              {item}
            </span>
          </p>
        );
      })}
    </div>
  );
}
