import { configureStore } from "@reduxjs/toolkit";

import appReducer from "../features/app";

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
