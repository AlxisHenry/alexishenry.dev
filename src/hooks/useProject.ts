import { useContext } from "react";

import { ProjectContext, type ProjectContextType } from "@/contexts";

export function useProject(): ProjectContextType {
  return useContext(ProjectContext);
}
