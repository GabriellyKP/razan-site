import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { MuiTheme } from "./styles/MuiTheme";
import Home from "./pages/home";
import { GlobalStyle } from "./styles/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={MuiTheme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
