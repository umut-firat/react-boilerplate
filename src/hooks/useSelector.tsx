import {
  TypedUseSelectorHook,
  useSelector as useStoreSelector,
} from "react-redux";

import type { StoreState } from "../store";

export const useSelector: TypedUseSelectorHook<StoreState> = useStoreSelector;
