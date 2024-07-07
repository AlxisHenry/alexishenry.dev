import { useContext } from "preact/hooks";
import { ThemeContext, ThemeContextType } from "../contexts";

export function useTheme(): ThemeContextType {
  return useContext(ThemeContext);
}
