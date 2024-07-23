import app from "../assets/app.json"
import { createContext } from "preact";
import { Data } from "../types";
import { useLocale } from "../hooks";

export const DataContext = createContext<Data>({
  navigation: {
    items: []
  },
  hero: {
    title: "",
    description: "",
    cta: "",
    image: "",
    icons: []
  },
  services: {
    title: "",
    description: "",
    items: []
  },
  projects: {
    title: "",
    viewProject: "",
    empty: "",
    description: "",
    items: []
  },
  faq: {
    title: "",
    description: "",
    items: []
  },
  workingTogether: {
    title: "",
    description: "",
    steps: []
  },
  contact: {
    title: "",
    description: "",
    submitted: "",
    submitMessage: "",
    fields: []
  }
});

interface DataProviderProps {
  children: any;
}

export const DataProvider = (props: DataProviderProps) => {
  const { children } = props;

  const { locale } = useLocale();

  return (
    <DataContext.Provider value={
      app[locale.code as keyof typeof app]
    }>
      {children}
    </DataContext.Provider>
  );
};