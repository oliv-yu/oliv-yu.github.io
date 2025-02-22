import React from "react";

export default function Introduction() {
  return (
    <div className="introduction-content">
      <div className="mb-4 text-xl font-medium flex">
        <div className="animate-wave after:content-['__\01F44B']"></div>
        <div className="ml-2">Hi! My name is...</div>
      </div>
      <h1 className="text-4xl font-bold sm:text-5xl hover:text-default-500 transition ease-in-and-out duration-300 transition-colors">
        Olivia Yu Wong
      </h1>
      <h2 className="mt-3 text-lg font-medium sm:text-xl">
        I&apos;m a{" "}
        <span className="animate-color-shift">frontend developer</span>.
      </h2>
    </div>
  );
}
