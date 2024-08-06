import { Logo } from "./Header";
import { motion } from "framer-motion";
import { Moon, Sun } from "react-feather";

import { ThemeContext } from "@/contexts";

export const Footer = () => {
  return (
    <footer className={"py-8 mb-12 mt-16"}>
      <div
        className={"content relative container mx-auto flex justify-between"}
      >
        <div className={"hidden lg:block"}>&nbsp;</div>
        <Logo small />
        <div className={"flex items-end mb-1"}>
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  );
};

const ThemeSwitcher = () => {
  return (
    <ThemeContext.Consumer>
      {(t) => (
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileDrag={{ rotate: 90, scale: 0.9 }}
          // @ts-ignore
          className={
            "rounded-full transition-all duration-300 ease-in-out flex items-center justify-center"
          }
        >
          <button
            className={
              "text-xl dark:text-gray-200 font-semibold hover:text-blue-500 text-gray-500 transition-all duration-300 ease-in-out transform dark:hover:text-blue-500"
            }
            onClick={() => {
              if (!t.store) return;
              t.store(t.theme == "light" ? "dark" : "light");
            }}
          >
            {t.theme == "dark" ? <Moon size={30} /> : <Sun size={30} />}
          </button>
        </motion.div>
      )}
    </ThemeContext.Consumer>
  );
};
