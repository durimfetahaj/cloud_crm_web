import { createTheme, responsiveFontSizes } from "@mui/material/styles";
// import { muiGlobalStyles } from "./globalSyles";
import componentsOverrides from "./overrides";
import { greyColors } from "./palette";

let theme = createTheme({
  palette: {
    primary: {
      main: "#5567FF",
      dark: "#02162D",
      light: "#7141f808",
    },
    secondary: {
      main: "#f50057",
      dark: "#c51162",
      light: "#ff4081",
    },
    grey: greyColors,
    text: {
      primary: "#02073E",
      secondary: "#fff",
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
      marginBottom: "1rem",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 700,
      marginBottom: "1rem",
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 700,
      marginBottom: "1rem",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 700,
      marginBottom: "1rem",
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 700,
      marginBottom: "1rem",
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 700,
      marginBottom: "1rem",
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 500,
      marginBottom: "1rem",
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
      marginBottom: "1rem",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      marginBottom: "1rem",
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      marginBottom: "1rem",
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
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
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
