import React from "react";
import Icon from "./Icon";
import MagneticWrapper from "./MagneticWrapper";

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    link: "https://github.com/oliv-yu",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/oliviayu/",
  },
];

export default function SocialLinks() {
  return (
    <div className="items-center flex">
      <ul className="flex items-center" aria-label="Social media">
        {SOCIAL_LINKS.map((item, idx) => (
          <li className="mr-8 shrink-0" key={`link-${idx}-${item.name}`}>
            <MagneticWrapper>
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
                  cssClass="fill-default-50 h-12 w-12 hover:fill-[#EBFF00] transition ease-in-and-out duration-300 transition-colors"
                />
              </a>
            </MagneticWrapper>
          </li>
        ))}
      </ul>

      <MagneticWrapper>
        <a
          className=" bg-[#EBFF00] rounded-[3rem] p-8 flex items-center justify-center text-black"
          href="mailto:olivyu@gmail.com"
        >
          <span className="text-3xl font-black uppercase tracking-tighter text-center">
            Let&apos;s Chat!
          </span>
        </a>
      </MagneticWrapper>
    </div>
  );
}
