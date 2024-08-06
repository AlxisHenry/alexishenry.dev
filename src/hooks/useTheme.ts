import { useContext } from "react";

import { ThemeContext, ThemeContextType } from "@/contexts";

export function useTheme(): ThemeContextType {
  return useContext(ThemeContext);
}
