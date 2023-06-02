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
    mercury: "#E5E5E5",
    iron: "#D1D5DA",
  },
  gradients: {
    primary:
      "linear-gradient(107deg, rgba(177,31,239,1) 30%, rgba(171,12,126,1) 100%)",
    second:
      "linear-gradient(107deg, rgba(177,31,239,1) 4%, rgba(175,24,199,1) 12%, rgba(174,21,179,1) 24%, rgba(171,12,169,1) 33%, rgba(161,19,173,1) 39%, rgba(177,30,231,1) 53%, rgba(177,31,239,1) 65%, rgba(174,22,183,1) 79%, rgba(171,12,126,1) 95%)",
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
