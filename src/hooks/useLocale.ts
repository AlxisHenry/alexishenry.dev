import { useContext } from "react";

import { LocaleContext, LocaleContextType } from "@/contexts";

export function useLocale(): LocaleContextType {
  return useContext(LocaleContext);
}
