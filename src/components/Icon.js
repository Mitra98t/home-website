import React from "react";
import { twMerge } from "tailwind-merge";

export default function Icon({
  iconName,
  strokeColor = "stroke-primary-content",
  height = "h-8",
}) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "menu":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
          />
        );
      case "close":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        );
      case "arrowLeft":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        );
      case "arrowRight":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        );

      default:
        return <></>;
    }
  };
  return (
    <svg
      className={twMerge("stroke-2 fill-none aspect-square", strokeColor, height)}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {getIcon(iconName)}
    </svg>
  );
}
