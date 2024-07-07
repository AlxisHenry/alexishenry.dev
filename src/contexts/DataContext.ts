import { createContext } from "preact";
import { Data } from "../types";

export const DataContext = createContext<Data>({
  services: [],
  frequentlyAskedQuestions: [],
  projects: [],
  workingTogetherSteps: [],
  contactOptions: [],
});
