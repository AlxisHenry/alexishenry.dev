import { useContext } from "preact/hooks";
import { Data } from "../types";
import { DataContext } from "../contexts";

export function useData(): Data {
    return useContext(DataContext);
}