import React from "react";

const PAGE_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

export default function PageLinks() {
  return (
    <nav
      className="page-links-content nav hidden lg:block"
      aria-label="In-page links"
    >
      <ul className="mt-16 w-max">
        {PAGE_LINKS.map((item) => (
          <li key={`link-${item.name}`}>
            <a className="group flex items-center py-3 active" href={item.href}>
              <span className="nav-line mr-4 h-px w-8 bg-blue-50 transition-all group-hover:w-16 group-hover:bg-blue-100 group-focus-visible:w-16 group-focus-visible:bg-blue-100 motion-reduce:transition-none"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-blue-50 group-hover:text-blue-400 group-focus-visible:text-blue-500">
                {item.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
