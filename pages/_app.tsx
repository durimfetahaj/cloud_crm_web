import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import theme from "styles/theme";
import type { AppProps } from "next/app";
import GlobalStyles from "styles/globalSyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles />
          <Component {...pageProps} />
        </MuiThemeProvider>
      </StyledEngineProvider>
    </StyledThemeProvider>
  );
}
