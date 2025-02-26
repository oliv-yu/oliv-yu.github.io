import React from "react";
import Icon from "./Icon";

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    link: "https://github.com/oliv-yu",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/oliviayu/",
  },
  {
    name: "Email",
    link: "mailto:olivyu@gmail.com",
  },
];

export default function Footer() {
  return (
    <ul
      className="social-links-content ml-1 mt-8 flex items-center"
      aria-label="Social media"
    >
      {SOCIAL_LINKS.map((item, idx) => (
        <li className="mr-4 shrink-0 text-lg" key={`link-${idx}-${item.name}`}>
          <a
            className="block"
            href={item.link}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${item.name} (opens a new tab)`}
            title={item.name}
          >
            <span className="sr-only">{item.name}</span>

            <Icon
              icon={item.name.toLowerCase()}
              cssClass="fill-default-50 h-6 w-6 hover:fill-default-500 transition ease-in-and-out duration-300 transition-colors"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
