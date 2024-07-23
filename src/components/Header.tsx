import { useState } from "preact/hooks";
import { LocaleContext } from "../contexts";
import { ChevronDown, Menu } from "react-feather";
import { motion } from "framer-motion"
import { useData } from "../hooks/useData";
import ReactCountryFlag from "react-country-flag";

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

export const LocaleSwitcher = () => {
  const [open, setOpen] = useState(false);

  return (
    <LocaleContext.Consumer>
      {
        ({ availableLocales, store }) => (
          <div
            class={"flex gap-3 items-center dark:hover:bg-gray-700 rounded-t-md ease-in-out cursor-pointer relative hover:bg-white transition-all duration-300 ease-in-out py-1 px-4"}
            onMouseEnter={() => setOpen(!open)}
            onMouseLeave={() => setOpen(false)}
          >
            <CurrentLocale open={open} />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: open ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              // @ts-ignore
              class={`absolute top-10 right-0 bg-white dark:bg-gray-800 shadow-lg rounded-b-md w-full pb-1 ${open ? "flex" : "hidden"} flex-col gap-2 transition-all duration-300 ease-in-out`}>
              <div class={"p-0"}>
                {
                  availableLocales.map((locale) => (
                    <div class={"px-0 flex items-center ml-4 gap-2 py-1"} onClick={() => {
                      setOpen(false);
                      store(locale);
                    }}>
                      <ReactCountryFlag
                        countryCode={locale.code}
                        svg
                        style={{
                          width: '.8em',
                          borderRadius: '50%',
                          boxShadow: '0 0 0 1px #000',
                          objectFit: 'cover',
                          height: '.8em',
                        }}
                      />
                      <p class={"text-lg font-semibold text-gray-500 dark:text-gray-200"}>
                        {locale.icon}
                      </p>
                    </div>
                  ))
                }
              </div>
            </motion.div>
          </div>
        )
      }
    </LocaleContext.Consumer >
  );
}

interface CurrentLocaleProps {
  open?: boolean;
}

const CurrentLocale = (props: CurrentLocaleProps) => {
  const { open = false } = props;

  return (
    <LocaleContext.Consumer>
      {
        ({ locale }) => (
          <div class={"flex items-center gap-2 py-1"}>
            <ReactCountryFlag
              countryCode={locale.code}
              svg
              style={{
                width: '.8em',
                borderRadius: '50%',
                boxShadow: '0 0 0 1px #000',
                objectFit: 'cover',
                height: '.8em',
              }}
            />
            <p class={"text-lg font-semibold text-gray-500 dark:text-gray-200"}>
              {locale.icon}
            </p>
            <ChevronDown 
              size={24} 
              color="#6b7280"
              // @ts-ignore
              style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s" }}
            />
          </div>
        )
      }
    </LocaleContext.Consumer>
  )
}

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

const Navigation = () => {
  const [currentTab, setCurrentTab] = useState(window.location.pathname);

  const { navigation } = useData();

  return (
    <nav class={"hidden lg:flex gap-8 items-center"}>
      <div class={"flex gap-12 h-full items-center"}>
        {navigation.items.map((tab) => (
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
      </div>
      <LocaleSwitcher />
    </nav>
  );
};

const ResponsiveNavigation = () => {
  const [currentTab, setCurrentTab] = useState(window.location.pathname);
  const [open, setOpen] = useState(false);

  const { navigation } = useData();

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
        {navigation.items.map((tab) => (
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
