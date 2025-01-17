import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import Root from "./Root.tsx";
import GlobalStyles from "./config/globalStyles.ts";
import defaultTheme from "./config/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Root />
    </ThemeProvider>
  </React.StrictMode>
);
