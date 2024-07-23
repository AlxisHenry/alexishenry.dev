import { useContext } from "preact/hooks";
import { LocaleContext, LocaleContextType } from "../contexts";

export function useLocale(): LocaleContextType  {
    return useContext(LocaleContext);
}