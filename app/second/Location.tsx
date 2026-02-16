export default function Location() {
  return (
    <>
      <img
        className="absolute inset-0 opacity-60 group-hover:scale-110 transition-transform duration-700"
        alt="Map of OC"
        src="/images/map.png"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

      <div className="relative">
        <p className="text-neutral-200 font-bold text-sm">Based in</p>
        <h3 className="text-xl font-bold">Orange County, CA</h3>

        {/* The Pulse Dot */}
        <div className="mt-4 flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
          </span>
          <span className="text-xs font-mono text-neutral-400">HELLO!</span>
        </div>
      </div>
    </>
  );
}
