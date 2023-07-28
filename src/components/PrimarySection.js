import React from "react";

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

export default function PrimarySection() {
  return (
    <div className="w-full h-full bg-secondary p-5 flex flex-col  items-center gap-4 text-secondary-content">
      <div className="w-full xl:w-5/6 px-5 py-3 bg-secondary-focus rounded-full">
        Ricerca
      </div>
      <div className="w-full xl:w-5/6 h-full flex flex-col xl:flex-row xl:items-end xl:justify-start  gap-2 xl:gap-6">
        {websites.map((websiteObject, i) => WebsiteSection(websiteObject))}
      </div>
    </div>
  );
}

function WebsiteSection({ title, sites }) {
  return (
    <div className="w-fit h-fit flex flex-col whitespace-nowrap">
      <h1 className="text-2xl">{title}</h1>
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
      <h1 className="text-lg">{name}</h1>
    </a>
  );
}
