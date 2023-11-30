import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./index.css";
import { CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFBB5C",
    },
    secondary: {
      main: "#FF9B50",
    },
    // success: {
    //   main: green[500],
    //   main: green[800], // green[400] in "dark" mode

    //   light: green[300],
    //   light: green[500], // green[300] in "dark" mode

    //   dark: green[700],
    //   dark: green[900], // green[700] in "dark" mode
    // },
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
