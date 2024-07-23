import locales from "../assets/locales.json";

import { createContext } from "preact";
import { useState } from "preact/hooks";

type Locale = {
  icon: string;
  code: string;
  name: string;
};

export interface LocaleContextType {
  availableLocales: Locale[];
  locale: Locale;
  setLocale: (locale: Locale) => void;
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
  setLocale: () => { },
});

export const LocaleProvider = (props: LocaleProviderProps) => {
  const { children } = props;

  const [locale, setLocale] = useState<Locale>(defaultLocale);

  // @ts-ignore
  const availableLocales: Locale[] = locales.available.filter(
    (l: Locale) => l.code !== locale.code
  );

  return (
    <LocaleContext.Provider value={{ availableLocales, locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};
