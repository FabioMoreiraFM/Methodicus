import './App.css'

import React from 'react';

import theme from 'config/theme';
import { AuthContextProvider } from "context/auth-context";
import Routes from "routes/mainRoute";

import { ThemeProvider, CssBaseline } from "@material-ui/core";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthContextProvider>
          <Routes />
        </AuthContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
