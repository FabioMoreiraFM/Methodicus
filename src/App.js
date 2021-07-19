import { CssBaseline, ThemeProvider} from "@material-ui/core";

import Routes from "routes";
import theme from 'config/theme';

import './App.css'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;
