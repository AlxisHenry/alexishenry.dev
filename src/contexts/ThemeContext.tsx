import { createContext } from "preact";
import { useEffect, useState } from "preact/hooks";

export interface ThemeContextType {
  theme: string;
  setTheme?: (theme: string) => void;
}

interface ThemeProviderProps {
  children: any;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  setTheme: () => {},
});

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    store();
  }, [theme]);

  function store() {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    apply(newTheme);
  }

  function apply(theme: string) {
    const classList = document.documentElement.classList;
    classList.add(theme);
    classList.remove(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
