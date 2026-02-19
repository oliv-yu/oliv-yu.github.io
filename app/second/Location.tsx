import Image from "next/image";
import { useState, useEffect } from "react";

export default function Location() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format time for California (PT)
  const laTime = time.toLocaleTimeString("en-US", {
    timeZone: "America/Los_Angeles",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <>
      <Image
        className="absolute inset-0 opacity-10 group-hover:scale-110 transition-transform duration-700"
        alt="Map of SoCal"
        src="/images/map.png"
        height={180}
        width={270}
      />

      <div className="flex flex-col justify-between h-full w-full">
        <div className="flex justify-between items-start">
          <div className="flex flex-col mb-2">
            <p className="text-xs font-mono text-amber-400 uppercase tracking-widest">
              Based in
            </p>
            <h3 className="text-lg font-bold text-white">
              Southern California
            </h3>
          </div>
          <span className="text-lg">📍</span>
        </div>

        <div className="bg-white/5 rounded-2xl p-3 flex items-center justify-between border border-white/5">
          <div className="flex flex-col">
            <p className="text-[10px] text-neutral-500 uppercase font-bold">
              Local Time
            </p>
            <p className="text-lg font-mono font-medium text-blue-300">
              {laTime}
            </p>
          </div>

          {/* Pulsing "Live" indicator */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[10px] text-neutral-500 font-mono">LIVE</span>
          </div>
        </div>
      </div>
    </>
  );
}
