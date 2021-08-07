import { CssBaseline, ThemeProvider} from "@material-ui/core";

import Routes from "routes/mainRoute";
import theme from 'config/theme';

import './App.css'
import { AuthContextProvider } from "context/auth-context";

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
