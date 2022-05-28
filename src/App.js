import { ThemeProvider } from "@mui/material";
import React from "react";
import Home from "./pages/Home";
import { theme } from "./styles/theme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </>
  );
};

export default App;
