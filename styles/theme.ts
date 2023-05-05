import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { globalStyles } from "./globalSyles";
import componentsOverrides from "./overrides";

let theme = createTheme({
  palette: {
    primary: {
      main: "#5567FF",
      dark: "#02162D",
      light: "#1D2146",
    },
    secondary: {
      main: "#f50057",
      dark: "#c51162",
      light: "#ff4081",
    },
    text: {
      primary: "#fff",
      secondary: "#666",
      disabled: "#ccc",
    },
    background: {
      default: "#fff",
      paper: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 16,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 700,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 700,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    button: {
      fontSize: "1rem",
      fontWeight: 500,
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globalStyles,
      },
    },
  },
});

theme = responsiveFontSizes(theme);
theme.components = componentsOverrides(theme);

export default theme;
export type ThemeType = typeof theme;

declare module "styled-components" {
  export interface Theme extends ThemeType {}
}
