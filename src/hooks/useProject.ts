import { useContext } from "preact/hooks";
import { ProjectContext, type ProjectContextType } from "../contexts";

export function useProject(): ProjectContextType {
    return useContext(ProjectContext);
}