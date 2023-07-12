import {
  TypedUseSelectorHook,
  useSelector as useStoreSelector,
} from "react-redux";

import type { StoreState } from "../store";

const useSelector: TypedUseSelectorHook<StoreState> = useStoreSelector;

export default useSelector;
