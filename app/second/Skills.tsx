const SKILLS_LIST = [
  {
    skills: [
      "JavaScript",
      "TypeScript",
      "ReactJS",
      "HTML",
      "CSS",
      "Tailwind",
      "Sass",
      "Node.js",
      "Storybook",
      "Git",
      "Playwright",
      "Jest",
      "Selenium",
    ],
    title: "Toolkit",
  },
];

export default function Skills() {
  return (
    <>
      <div className="text-4xl">🚀</div>
      <div>
        {SKILLS_LIST.map(({ title, skills }) => (
          <div className="pb-4" key={title}>
            <h3 className="text-xl font-bold leading-tight mb-4">{title}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-[11px] uppercase tracking-widest bg-black/20 px-3 py-1 rounded-full border border-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
