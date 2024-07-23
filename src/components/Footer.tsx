import { Logo } from "./Header.tsx";
import { motion } from "framer-motion";
import { ThemeContext } from "../contexts";
import { Moon, Sun } from "react-feather";


export const Footer = () => {
  return (
    <footer class={"py-8 mb-4 mt-12"}>
      <div class={"container mx-auto flex align-center justify-center"}>
        <Logo />
      </div>
      <ThemeSwitcher />
    </footer>
  );
};

const ThemeSwitcher = () => {
  return (
    <ThemeContext.Consumer>
      {(t) => (
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ rotate: 90, scale: 0.9 }}
          // @ts-ignore
          class={"fixed bottom-4 right-4 hover:bg-white dark:hover:bg-gray-800 rounded-full px-3 py-3 transition-all duration-300 ease-in-out flex items-center justify-center"}>
          <button
            class={
              "text-xl dark:text-gray-200 font-semibold hover:text-blue-500 text-gray-500 transition-all duration-300 ease-in-out transform dark:hover:text-blue-500"
            }
            onClick={() => {
              if (!t.store) return;
              t.store(t.theme == "light" ? "dark" : "light");
            }}
          >
            {t.theme == "dark" ? <Moon size={36} /> : <Sun size={36} />}
          </button>
        </motion.div>
      )}
    </ThemeContext.Consumer>
  );
};