import React from "react";

const SKILLS_LIST = [
  { skills: ["JavaScript", "TypeScript", "HTML"], title: "Languages" },
  { skills: ["CSS", "Tailwind", "Sass"], title: "Styling" },
  { skills: ["Playwright", "Jest"], title: "Testing" },
  { skills: ["ReactJS", "Node.js", "Storybook"], title: "Tools" },
  { skills: ["Git"], title: "Version Control" },
];

export default function Skills() {
  return (
    <div className="skills-content">
      {SKILLS_LIST.map(({ title, skills }) => (
        <div key={title} className="grid sm:grid-cols-4 mb-3 sm:mb-0">
          <div className="text-sm text-default-300 flex items-center align-right uppercase">
            {title}
          </div>

          <div className="flex flex-wrap font-mono text-xs space-x-3 sm:space-x-4 sm:col-span-3">
            {skills.map((item) => (
              <p
                className="my-4 cursor-default hover:scale-125 hover:text-md hover:tracking-wider hover:ease-in-and-out transition"
                key={`skill-${item}`}
              >
                <span className="rounded-3xl border-1 border-default-400 py-2 px-3 hover:bg-default-500 transition ease-in-and-out duration-300 transition-colors">
                  {item}
                </span>
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
