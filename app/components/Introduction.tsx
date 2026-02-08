import React from "react";

export default function Introduction() {
  return (
    <div className="introduction-content">
      <div className="text-lg mb-2 font-medium flex sm:text-xl">
        <div className="animate-wave after:content-['__\01F44B']"></div>
        <div className="animate-enter-1 ml-2">Hi! My name is...</div>
      </div>
      <h1 className="animate-enter-2 cursor-default text-4xl font-bold sm:text-5xl hover:text-default-500 transition ease-in-and-out duration-300 transition-colors">
        Olivia Yu Wong.
      </h1>
      <h2 className="animate-enter-3 mt-6 text-lg font-medium sm:text-xl">
        I&apos;m a <span className="text-default-300">frontend developer</span>.
      </h2>
    </div>
  );
}
