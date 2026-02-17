const HOBBIES = [
  { label: "Learning Illustration", icon: "🎨" },
  { label: "Whisking Matcha", icon: "🍵" },
  { label: "Petting Cats", icon: "🐱" },
  { label: "Traveling to New Cities", icon: "✈️" },
];

export default function Hobbies() {
  return (
    <>
      <div className="flex justify-between items-start">
        <p className="text-xs font-mono text-amber-400 uppercase tracking-widest">
          Interests
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">
        {HOBBIES.map((hobby) => (
          <div
            key={hobby.label}
            className="flex items-center gap-2 bg-white/5 rounded-xl p-2 border border-white/5 hover:bg-white/10 transition-colors"
          >
            <span className="text-xs">{hobby.icon}</span>
            <span className="text-xs font-medium text-neutral-400 uppercase tracking-tighter">
              {hobby.label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-3 text-xs text-neutral-600 italic flex items-center">
        <span className="relative flex h-2 w-2 mr-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
        </span>
        <span>
          Currently working on: Solving a Rubik&apos;s Cube in under 5 minutes
        </span>
      </div>
    </>
  );
}
