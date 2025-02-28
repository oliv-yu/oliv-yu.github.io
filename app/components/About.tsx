import React from "react";

export default function About() {
  return (
    <div className="about-content text-slate-300">
      <p className="mb-4">
        I&apos;m a developer based in Southern California. I originally started
        at&nbsp;
        <a href="https://www.liferay.com/">
          <span className="text-default-400 font-bold">Liferay</span>
        </a>
        &nbsp;as a QA engineer and later switched to frontend development. I
        love the creativity and problem solving that comes with the work, making
        sure that the user has an excellent experience on the product.
      </p>
      <p className="mb-4">
        Currently, I am on the search infrastructure team at Liferay, where I
        contribute to the creation and maintenance of UI components for search
        optimization tools and search widgets. I also assist in functional
        testing and test analysis.
      </p>
      <p className="mb-4">
        My other interests include
        <span className="before:content-['__\1F4DA__']">reading </span>
        (mystery, classic literature, fantasy),
        <span className="before:content-['__\1F3A7__']">listening </span>
        to podcasts (Planet Money, Freakonomics, Stuff You Should Know), making
        <span className="before:content-['__\1F9F6__']">crochet </span>
        hats and amigurumi, and giving my reluctant
        <span className="before:content-['__\1F408__']">cat </span>
        hugs & kisses.
      </p>
    </div>
  );
}
