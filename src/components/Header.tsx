import { useState } from "preact/hooks";
import { ThemeContext } from "../contexts";
import { Menu, Moon, Sun } from "react-feather";
import { motion } from "framer-motion"

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b-2 border-gray-200 shadow-sm dark:border-gray-700">
      <div class={"container text-2xl flex justify-between items-center py-4 mx-auto"}>
        <Logo />
        <Navigation />
        <ResponsiveNavigation />
      </div>
    </header>
  );
};

const ThemeSwitcher = () => {
  return (
    <ThemeContext.Consumer>
      {(t) => (
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ rotate: 90, scale: 0.9 }}>
          <button
            class={
              "text-xl dark:text-gray-200 font-semibold hover:text-blue-500 text-gray-500 transition-all duration-300 ease-in-out transform dark:hover:text-blue-500"
            }
            onClick={() => {
              if (!t.store) return;
              t.store(t.theme == "light" ? "dark" : "light");
            }}
          >
            {t.theme == "dark" ? <Moon size={28} /> : <Sun size={28} />}
          </button>
        </motion.div>
      )}
    </ThemeContext.Consumer>
  );
};

export const Logo = () => {
  return (
    <a class={"p-0 select-none"} href={"/"}>
      <h1 class={"text-2xl md:text-4xl font-thin"}>
        <span className={"italic"}>alexis</span>
        <span class={"font-extrabold text-blue-500"}>henry.</span>
      </h1>
    </a>
  );
};

const tabs = [
  {
    link: "/",
    name: "Qui suis-je ?",
  }, {
    link: "/projects",
    name: "Réalisations",
  },
  {
    link: "/contact",
    name: "Contact",
  },
];

const Navigation = () => {
  const [currentTab, setCurrentTab] = useState(window.location.pathname);

  return (
    <nav class={"hidden lg:flex gap-12"}>
      {tabs.map((tab) => (
        <NavLink
          active={tab.link == currentTab}
          link={tab.link}
          onClick={() => {
            setCurrentTab(tab.link);
          }}
        >
          {tab.name}
        </NavLink>
      ))}
      <ThemeSwitcher />
    </nav>
  );
};

const ResponsiveNavigation = () => {
  const [currentTab, setCurrentTab] = useState(window.location.pathname);
  const [open, setOpen] = useState(false);

  return (
    <div class={"lg:hidden flex justify-between items-center gap-6"}>
      <button
        class={"dark:text-gray-200 font-semibold hover:text-blue-500 text-gray-500 transition-all duration-300 ease-in-out transform dark:hover:text-blue-500"}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Menu size={40} />
        </motion.div>
      </button>
      <motion.nav
        // @ts-ignore
        class={`fixed top-[80px] left-0 right-0 z-50 bg- dark:bg-gray-800 border-b-2 border-gray-200 shadow-sm dark:border-gray-700 flex flex-col gap-4 p-4 ${open ? "flex" : "hidden"
          }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ duration: 0.2 }}

      >
        {tabs.map((tab) => (
          <NavLink
            active={tab.link == currentTab}
            link={tab.link}
            onClick={() => {
              setCurrentTab(tab.link);
              setOpen(false);
            }}
          >
            {tab.name}
          </NavLink>
        ))}
      </motion.nav>
      <ThemeSwitcher />
    </div>
  );
}

interface NavLinkProps {
  children: string;
  active?: boolean;
  onClick: () => void;
  link: string;
}

const NavLink = (props: NavLinkProps) => {
  const { children, active, onClick, link } = props;

  return (
    <a
      onClick={onClick}
      class={`text-xl font-semibold hover:text-blue-500 transition-colors duration-300 ease-in-out border-b-2 border-transparent hover:border-blue-500 ${active ? "border-b-blue-500 text-blue-500" : "text-gray-500 dark:text-gray-200"
        }`}
      href={link}
    >
      {children}
    </a>
  );
};
