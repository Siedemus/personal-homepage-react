import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Assets/globalStyles";

const theme = {
  colors: {
    whiteLilac: "#FBFBFE",
    white: "#FFFFFF",
    violet: "#B11FEF",
    mineShaft: "#252525",
    slateGray: "#6E7E91",
  },
  gradients: {
    primary:
      "linear-gradient(107deg, rgba(177,31,239,1) 30%, rgba(171,12,126,1) 100%);",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <GlobalStyles />
      <App />
    </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
