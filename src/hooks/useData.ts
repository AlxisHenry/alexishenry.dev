import { useContext } from "preact/hooks";
import { DataContext } from "../contexts";
import { Data } from "../types";

export function useData(): Data {
    return useContext(DataContext);
}