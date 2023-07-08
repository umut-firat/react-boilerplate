import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import { Provider as StoreProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { trTR as MuiCoreTRLocale } from "@mui/material/locale";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { store } from "./store";
import router from "./router";

import { DialogProvider } from "./providers";

const themeOptions = store.getState().app.themeOptions;
const theme = createTheme(themeOptions, MuiCoreTRLocale);

const root = document.getElementById("root")!;
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DialogProvider>
          <RouterProvider router={router} />
        </DialogProvider>
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>
);
