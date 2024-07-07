import { useState } from "preact/hooks";
import { ThemeContext } from "../contexts";
import { Moon, Sun } from "react-feather";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b-2 border-gray-200 shadow-sm">
      <div class={"text-2xl flex justify-between items-center py-4 mx-auto"}>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

const ThemeSwitcher = () => {
  return (
    <ThemeContext.Consumer>
      {(t) => (
        <button
          class={
            "text-xl font-semibold hover:text-blue-500 text-gray-500 transition-all duration-300 ease-in-out transform hover:scale-105"
          }
          onClick={() => {
            if (!t.setTheme) return;
            t.setTheme(t.theme == "light" ? "dark" : "light");
          }}
        >
          {t.theme == "light" ? <Moon size={36} /> : <Sun size={36} />}
        </button>
      )}
    </ThemeContext.Consumer>
  );
};

export const Logo = () => {
  return (
    <a class={"p-0 select-none"} href={"/"}>
      <h1 class={"text-4xl font-thin"}>
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
  console.log(window.location.pathname);
  const [currentTab, setCurrentTab] = useState(window.location.pathname);

  return (
    <nav class={"flex gap-12"}>
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
      class={`text-xl font-semibold hover:text-blue-500 transition-colors duration-300 ease-in-out border-b-2 border-transparent hover:border-blue-500 ${
        active ? "border-b-blue-500 text-blue-500" : "text-gray-500"
      }`}
      href={link}
    >
      {children}
    </a>
  );
};
