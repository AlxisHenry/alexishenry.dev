import { Logo } from "./Header.tsx";
import { motion } from "framer-motion";
import { ThemeContext } from "../contexts";
import { Moon, Sun } from "react-feather";


export const Footer = () => {
  return (
    <footer class={"py-8 mb-12 mt-16"}>
      <div class={"content relative container mx-auto flex justify-between"}>
        <div class={"hidden lg:block"}>&nbsp;</div>
        <Logo small />
        <div class={"flex items-end mb-1"}>
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
        <motion.div whileHover={{ scale: 1.1 }} whileDrag={{ rotate: 90, scale: 0.9 }}
          // @ts-ignore
          class={"rounded-full transition-all duration-300 ease-in-out flex items-center justify-center"}>
          <button
            class={
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