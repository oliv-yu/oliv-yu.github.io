import React from "react";

export default function PageLinks({ links }) {
  return (
    <nav
      className="page-links-content nav hidden lg:block"
      aria-label="In-page links"
    >
      <ul className="mt-16 w-max">
        {links.map((item) => (
          <li key={`link-${item.name}`}>
            <a className="group flex items-center py-3 active" href={item.href}>
              <span className="nav-line mr-4 h-px w-8 bg-default-50 transition-all group-hover:w-16 group-hover:bg-default-100 group-focus-visible:w-16 group-focus-visible:bg-default-100 motion-reduce:transition-none"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-default-50 group-hover:text-default-400 group-focus-visible:text-default-500">
                {item.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
