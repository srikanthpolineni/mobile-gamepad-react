import { createTheme, ThemeProvider, CssBaseline, } from "@material-ui/core";
import GlobalStyles from '../utilities/GlobalStyles';
import { SocketProvider } from '../contexts/SocketProvider';
import Keypad from "./Keypad";
import ConnectStatus from "./ConnectStatus";


const theme = createTheme({
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: '5.5rem',
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  }
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <SocketProvider>
        <ConnectStatus />
        <Keypad />
      </SocketProvider>
    </ThemeProvider >
  );
}

export default App;
