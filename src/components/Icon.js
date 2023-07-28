import React from "react";
import { twMerge } from "tailwind-merge";

export default function Icon({
  iconName,
  strokeColor = "stroke-primary-content",
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
      default:
        return <></>;
    }
  };
  return (
    <svg
      className={twMerge(
        " fill-primary-content stroke-2 h-8 aspect-square",
        strokeColor
      )}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {getIcon(iconName)}
    </svg>
  );
}
