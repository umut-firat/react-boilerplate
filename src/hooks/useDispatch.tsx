import { useDispatch } from "react-redux";

import type { StoreDispatch } from "../store";

export const useAppDispatch: () => StoreDispatch = useDispatch;
