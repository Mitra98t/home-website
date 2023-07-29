import React from "react";
import { twMerge } from "tailwind-merge";

export default function BackgroundImage({ currentTheme }) {
  return (
    <div className="w-full h-screen absolute">
      <div
        className={twMerge(
          "w-full h-screen absolute inset-0",
          currentTheme.aesthetics.blurredBackground &&
            " bg-slate-50/0 backdrop-blur-md z-[-8]"
        )}
      ></div>
      <img
        src={"https://i.redd.it/ghbmrbnbhba81.png"}
        alt="loading..."
        className={"object-cover w-full h-screen absolute inset-0 -z-10"}
      ></img>
    </div>
  );
}
