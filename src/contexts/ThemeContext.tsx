import { createContext } from "preact";
import { useState } from "preact/hooks";

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

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
