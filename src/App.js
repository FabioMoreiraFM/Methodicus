import Login from "pages/Login";
import { CssBaseline, ThemeProvider} from "@material-ui/core";
import theme from 'config/theme';

import './App.css'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Login />
      </ThemeProvider>
    </>
  );
}

export default App;
