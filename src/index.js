import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "/src/components/app/app";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./thems/default";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
