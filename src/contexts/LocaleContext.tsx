import locales from "../assets/locales.json";

import { createContext } from "preact";
import { useEffect, useState } from "preact/hooks";

type Locale = {
  icon: string;
  code: string;
  name: string;
};

export interface LocaleContextType {
  availableLocales: Locale[];
  locale: Locale;
  store: (locale: Locale) => void;
}

interface LocaleProviderProps {
  children: any;
}

const defaultLocale: Locale = {
  icon: "🇫🇷",
  code: "FR",
  name: "Français",
};

export const LocaleContext = createContext<LocaleContextType>({
  availableLocales: [],
  locale: defaultLocale,
  store: () => { },
});

export const LocaleProvider = (props: LocaleProviderProps) => {
  const { children } = props;

  const [locale, setLocale] = useState<Locale>(defaultLocale);

  // @ts-ignore
  const availableLocales: Locale[] = locales.available.filter(
    (l: Locale) => l.code !== locale.code
  );

  const store = (locale: Locale) => {
    setLocale(locale);
    localStorage.setItem("locale", JSON.stringify(locale));
  }

  useEffect(() => {
    let currentLocale = localStorage.getItem("locale") ?? null;
    if (currentLocale) {
      setLocale(JSON.parse(currentLocale) || defaultLocale);
    }
  }, []);


  return (
    <LocaleContext.Provider value={{ availableLocales, locale, store }}>
      {children}
    </LocaleContext.Provider>
  );
};
