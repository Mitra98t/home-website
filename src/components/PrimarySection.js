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
];

export default function PrimarySection() {
  return (
    <div className="w-full h-fit bg-accent-focus p-5 flex flex-col">
      {websites.map((websiteObject, i) => WebsiteSection(websiteObject))}
    </div>
  );
}

function WebsiteSection({ title, sites }) {
  return (
    <div className="w-full h-fit flex flex-col gap-2">
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
      className="flex flex-row gap-1"
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <p>{">"}</p>
      <h1 className="text-lg">{name}</h1>
    </a>
  );
}
