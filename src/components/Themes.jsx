import { React, useEffect, useState } from "react";

import { themes } from "../data";
import ThemeItem from "./ThemeItem";
import { FaCog } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import "./themes.css";

const getStorageColor = () => {
  let color = "hsl(271, 76%, 53%)";
  if (localStorage.getItem("color")) {
    color = localStorage.getItem("color");
  }

  return color;
};

const getStorageTheme = () => {
    let theme = "dark-theme";
    if (localStorage.getItem("theme")) {
      theme = localStorage.getItem("theme");
    }
  
    return theme;
  };

const Themes = () => {
  const [showSwitcher, setshowSwitcher] = useState(false);
  const closeSwitcher = ()=>{
    setshowSwitcher(!showSwitcher);
  }

  const [color, setColor] = useState(getStorageColor());
  const changeColor = (color) => {
    setColor(color);
  };

  const [theme, setTheme] = useState(getStorageTheme());
  const toogleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--first-color", color);
    localStorage.setItem("color", color);
  }, [color]);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      <div
        className={"style__switcher " + (showSwitcher ? "show-switcher" : "")}
      >
        <div
          className="style__switcher-toggler"
          onClick={() => {
            setshowSwitcher(!showSwitcher);
          }}
        >
          <FaCog />
        </div>

        <div className="theme__toggler" onClick={toogleTheme}>
          { theme === "light-theme" ? <BsMoon/> : <BsSun/> }
        </div>

        <h3 className="style__switcher-title">Style Swticher</h3>
        <div className="style__switcher-items">
          {themes.map((theme, index) => {
            return (
              <ThemeItem key={index} {...theme} changeColor={changeColor} closeSwitcher={closeSwitcher} />
            );
          })}
        </div>

        <div
          className="style__switcher-close"
          onClick={() => {
            setshowSwitcher(!showSwitcher);
          }}
        >
          &times;
        </div>
      </div>
    </div>
  );
};

export default Themes;
