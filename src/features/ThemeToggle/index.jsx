import React, { useEffect, useState } from "react";
import { Toggle } from "../../components/Toggle";

export const ThemeToggle = () => {
  const themeFromStorage = localStorage.getItem("theme");
  const [theme, setTheme] = useState(
    // themeFromStorage
    themeFromStorage || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleClick = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <Toggle
      value={theme === "dark"}
      leftIcon={"☀️"}
      rightIcon={"🌙"}
      handleClick={handleClick}
      name="isDark"
    />
  );
};
