import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MuiThemeProvider,
  THEME_ID,
  StyledEngineProvider,
} from "@mui/material/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import theme from "styles/theme";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </MuiThemeProvider>
      </StyledEngineProvider>
    </StyledThemeProvider>
  );
}
