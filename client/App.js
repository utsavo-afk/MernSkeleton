import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import Menu from "./core/Menu";
import MainRouter from "./MainRouter";

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Menu />
        <MainRouter />
      </ThemeProvider>
    </Router>
  );
};

export default App;
