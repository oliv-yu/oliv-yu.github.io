import React, { useState, useEffect } from "react";

export default function Pointer() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (event: MouseEvent) => {
      setPointer({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouse);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
    };
  });

  return (
    <div
      className="h-[600px] w-[600px] pointer-events-none opacity-5 fixed rounded-[50%]"
      style={{
        left: pointer.x,
        top: pointer.y,
        background: `radial-gradient(circle at center, #7c2d12 0, #1e3a8a, #1e1b4b 100%)`,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
