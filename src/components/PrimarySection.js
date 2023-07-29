import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import Icon from "./Icon";

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

const googleSearchUrl = "http://google.com/search?q=";

export default function PrimarySection({ currentTheme }) {
  const [searchWeb, setSearchWeb] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = googleSearchUrl + encodeURIComponent(searchWeb);
  };
  return (
    <div className="w-full h-full bg-secondary p-5 flex flex-col  items-center gap-4 text-secondary-content border-primary-content">
      <form onSubmit={(e) => handleSubmit(e)} className="w-full xl:w-5/6 ">
        <input
          type="text"
          className={twMerge(
            "w-full px-5 py-3 bg-secondary-focus border-primary-content placeholder-primary-content font-semibold text-secondary-content",
            currentTheme.aesthetics.rounded && "rounded-full",
            currentTheme.aesthetics.bordered && "border-2",
            currentTheme.aesthetics.shadowed && "shadow-lg"
          )}
          placeholder="Search"
          onChange={(e) => setSearchWeb(e.target.value)}
        />
      </form>
      <div className="w-full xl:w-5/6 h-full flex flex-col xl:flex-row xl:flex-wrap xl:items-end xl:justify-between gap-2 xl:gap-6">
        {websites.map((websiteObject, i) => WebsiteSection(websiteObject))}
      </div>
    </div>
  );
}

function WebsiteSection({ title, sites }) {
  return (
    <div className="w-fit h-fit flex flex-col gap-2 whitespace-nowrap">
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
      className="flex flex-row items-center justify-start gap-1 group"
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <div className="group-hover:hidden block">
        <Icon iconName="arrowLeft" height="h-5" />
      </div>
      <div className="group-hover:block hidden">
        <Icon iconName="arrowRight" height="h-5" />
      </div>
      <h1 className="h-full pb-0.5 text-lg xl:text-xl ">{name}</h1>
    </a>
  );
}
