import { useDispatch as useStoreDispatch } from "react-redux";

import type { StoreDispatch } from "../store";

const useDispatch: () => StoreDispatch = useStoreDispatch;

export default useDispatch;
