import { createTheme, responsiveFontSizes } from "@mui/material/styles";
// import { muiGlobalStyles } from "./globalSyles";
import componentsOverrides from "./overrides";
import { grey } from "@mui/material/colors";

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
    grey: {
      50: grey[50],
      100: grey[100],
      200: grey[200],
      300: grey[300],
      400: grey[400],
      500: grey[500],
      600: grey[600],
      700: grey[700],
      800: grey[800],
      900: grey[900],
      A100: grey.A100,
      A200: grey.A200,
      A400: grey.A400,
      A700: grey.A700,
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
      // styleOverrides: muiGlobalStyles,
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
