import logo from "./logo.svg";
import "./App.css";
import PrimaryImage from "./components/PrimaryImage";
import PrimarySection from "./components/PrimarySection";

import { themes } from "./utils";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Icon from "./components/Icon";
import BackgroundImage from "./components/BackgroundImage";

const defaultSettings = {
  theme: "retro",
  aesthetics: {
    rounded: true,
    bordered: true,
    shadowed: false,
    showImageAsBackground: false,
    blurredBackground: false,
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState({ ...defaultSettings });
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      data-theme={currentTheme.theme}
      className={twMerge(
        "relative w-full h-screen grid place-items-center text-primary-content overflow-hidden transitionWrapper ",
        currentTheme.aesthetics.showImageAsBackground && "bg-transparent "
      )}
    >
      <BackgroundImage currentTheme={currentTheme} />
      {themeSelector(currentTheme, setCurrentTheme, showMenu, setShowMenu)}
      <div
        className={twMerge(
          " w-3/5 md:w-2/5 lg:w-1/3 xl:w-2/3 h-fit xl:h-1/2 overflow-hidden flex flex-col xl:flex-row border-primary-content",
          currentTheme.aesthetics.rounded && "rounded-3xl",
          currentTheme.aesthetics.bordered && "border-2",
          currentTheme.aesthetics.shadowed && "shadow-lg"
        )}
      >
        <PrimaryImage />
        <PrimarySection currentTheme={currentTheme} />
      </div>
    </div>
  );
}

function themeSelector(currentTheme, setCurrentTheme, showMenu, setShowMenu) {
  return (
    <>
      <button
        className={twMerge(
          "block absolute top-5 right-5 ",
          showMenu && "hidden"
        )}
        onClick={() => setShowMenu(!showMenu)}
      >
        <Icon
          iconName={"menu"}
          leaveBackground={currentTheme.aesthetics.showImageAsBackground}
          additionalCss={twMerge(
            currentTheme.aesthetics.showImageAsBackground && currentTheme.aesthetics.rounded && "rounded-full",
            currentTheme.aesthetics.showImageAsBackground && currentTheme.aesthetics.shadowed && "shadow-md",
            currentTheme.aesthetics.showImageAsBackground && currentTheme.aesthetics.bordered &&
              "border-2 border-primary-content"
          )}
        />
      </button>
      <div
        className={twMerge(
          "absolute top-5 right-5 w-fit h-fit hidden  ",
          showMenu && "block"
        )}
      >
        <div
          className={twMerge(
            "relative w-full h-full p-4 text-primary-content flex flex-col gap-4 accent-accent bg-primary border-primary-content",
            currentTheme.aesthetics.rounded && "rounded-2xl",
            currentTheme.aesthetics.bordered && "border-2",
            currentTheme.aesthetics.shadowed && "shadow-lg"
          )}
        >
          <button
            className="absolute top-2 right-2"
            onClick={() => setShowMenu(!showMenu)}
          >
            <Icon iconName={"close"} />
          </button>
          <h1 className="text-lg font-semibold pr-12">Theme Selector</h1>
          <select
            className={twMerge(
              "bg-primary-focus px-2 py-1 border-primary-content",
              currentTheme.aesthetics.rounded && "rounded-full",
              currentTheme.aesthetics.bordered && "border-2"
            )}
            onChange={(e) => {
              let oldTheme = { ...currentTheme };
              oldTheme.theme = e.target.value;
              setCurrentTheme(oldTheme);
            }}
          >
            {themes
              .sort((a, b) => a.localeCompare(b))
              .map((theme) => (
                <option selected={theme === currentTheme.theme} value={theme}>
                  {theme}
                </option>
              ))}
          </select>
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-semibold">Aesthetic</h1>
            {defaultSettings.aesthetics &&
              Object.keys(defaultSettings.aesthetics).map((key) => (
                <div className="flex flex-row items-center justify-start gap-2">
                  <input
                    type="checkbox"
                    checked={currentTheme.aesthetics[key]}
                    className={twMerge(
                      "checkbox-sm ",
                      currentTheme.aesthetics.rounded && "rounded-sm"
                    )}
                    id={key}
                    onChange={(e) => {
                      let oldTheme = { ...currentTheme };
                      oldTheme.aesthetics[key] = e.target.checked;
                      setCurrentTheme(oldTheme);
                    }}
                  />
                  <label className="" htmlFor={key}>
                    {key}
                  </label>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
