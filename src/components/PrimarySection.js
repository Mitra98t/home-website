import React from "react";
import { twMerge } from "tailwind-merge";

const websites = [
  {
    title: "Work",
    sites: [
      {
        name: "Portfolio",
        url: "https://www.giacomocerquone.com",
      },
      {
        name: "GitHub",
        url: "https://github.com",
      },
    ],
  },
  {
    title: "Work",
    sites: [
      {
        name: "Portfolio",
        url: "https://www.giacomocerquone.com",
      },
      {
        name: "GitHub",
        url: "https://github.com",
      },
    ],
  },
  {
    title: "Work",
    sites: [
      {
        name: "Portfolio",
        url: "https://www.giacomocerquone.com",
      },
      {
        name: "GitHub",
        url: "https://github.com",
      },
    ],
  },
  {
    title: "Work",
    sites: [
      {
        name: "Portfolio",
        url: "https://www.giacomocerquone.com",
      },
      {
        name: "GitHub",
        url: "https://github.com",
      },
    ],
  },
];

export default function PrimarySection({currentTheme}) {
  return (
    <div className="w-full h-full bg-secondary p-5 flex flex-col  items-center gap-4 text-secondary-content border-primary-content">
      <div className={twMerge("w-full xl:w-5/6 px-5 py-3 bg-secondary-focus border-primary-content", 
          currentTheme.aesthetics.rounded && "rounded-full", 
          currentTheme.aesthetics.bordered && "border-2",
            currentTheme.aesthetics.shadowed && "shadow-lg"
      )}>
        Ricerca
      </div>
      <div className="w-full xl:w-5/6 h-full flex flex-col xl:flex-row xl:flex-wrap xl:items-end xl:justify-between gap-2 xl:gap-6">
        {websites.map((websiteObject, i) => WebsiteSection(websiteObject))}
      </div>
    </div>
  );
}

function WebsiteSection({ title, sites }) {
  return (
    <div className="w-fit h-fit flex flex-col whitespace-nowrap">
      <h1 className="text-2xl xl:text-3xl">{title}</h1>
      <div className="w-full h-fit flex flex-col ">
        {sites.map((site) => (
          <WebsiteCard {...site} />
        ))}
      </div>
    </div>
  );
}

function WebsiteCard({ name, url }) {
  return (
    <a
      className="flex flex-row gap-1 group"
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <p className="block group-hover:hidden">{"-"}</p>
      <p className="hidden group-hover:block">{">"}</p>
      <h1 className="text-lg xl:text-xl">{name}</h1>
    </a>
  );
}
