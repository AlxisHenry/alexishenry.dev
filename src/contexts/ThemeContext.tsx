"use client";

import { createContext } from "react";
import { useEffect, useState } from "react";

export interface ThemeContextType {
  theme: string;
  store?: (theme: string) => void;
}

interface ThemeProviderProps {
  children: any;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  store: () => {},
});

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    let currentTheme = localStorage.getItem("theme") ?? null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (!currentTheme) {
      currentTheme = prefersDark ? "dark" : "light";
    }
    apply(currentTheme);
  }, []);

  function store() {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    apply(newTheme);
  }

  function apply(theme: string) {
    setTheme(theme);
    const documentElement = document.documentElement.classList;
    const body = document.body.classList;
    documentElement.add(theme);
    documentElement.remove(theme === "light" ? "dark" : "light");
    body.add(theme);
    body.remove(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ theme, store }}>
      {children}
    </ThemeContext.Provider>
  );
};
