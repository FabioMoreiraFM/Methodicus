import './App.css'

import React from 'react';

import theme from 'config/theme';
import { AuthContextProvider } from "context/auth-context";
import { SnackbarProvider } from 'notistack';
import Routes from "routes/mainRoute";

import { ThemeProvider, CssBaseline } from "@material-ui/core";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider maxSnack={3}>
          <AuthContextProvider>
            <Routes />
          </AuthContextProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
