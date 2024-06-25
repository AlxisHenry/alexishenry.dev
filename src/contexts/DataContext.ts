import { createContext } from "preact";
import { Data } from "../types";

export const DataContext = createContext<Data>({
    experiences: [],
    stack: {
        backend: [],
        frontend: [],
        tools: [],
    },
    projects: [],
    about: null
});