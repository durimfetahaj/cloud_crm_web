import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primary: "#02162D",
    secondary: "#5567FF",
    background: "#f7f7f7",
    text: "#333",
    common: {
      white: "#fff",
      black: "#000",
    },
  },
  fonts: {
    heading: "DM Sans, sans-serif",
    body: "DM Sans, sans-serif",
  },
  fontSizes: {
    xs: "1rem",
    sm: "1.2rem",
    md: "1.5rem",
    lg: "1.8rem",
  },
  breakpoints: {
    xs: "480px",
    sm: "768px",
    md: "992px",
    lg: "1200px",
    xl: "1440px",
    xxl: "1600px",
  },
  spacing: {
    xxs: "4px",
    xs: "8px",
    sm: "16px",
    md: "24px",
    lg: "32px",
    xl: "48px",
    xxl: "64px",
  },
  borderRadius: {
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    xxl: "24px",
    full: "9999px",
  },
  containerWidth: "1200px",
};

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: ${theme.colors.primary};
    --color-background: ${theme.colors.background};
    --color-text: ${theme.colors.text};
    --font-family-heading: ${theme.fonts.heading};
    --font-family-body: ${theme.fonts.body};
    --font-size-xs: ${theme.fontSizes.xs};
    --font-size-sm: ${theme.fontSizes.sm};
    --font-size-md: ${theme.fontSizes.md};
    --font-size-lg: ${theme.fontSizes.lg};
  }

  * {
scroll-behavior: smooth;
font-family: var(--font-family-body);
  }

  body {
    margin: 0;
    padding: 0;
    font-family: var(--font-family-body);
    font-size: var(--font-size-sm);
    color: var(--color-text);
    background-color: var(--color-background);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    
  }

  h1 {
    font-size: var(--font-size-lg);
    font-family: var(--font-family-heading);
    margin: 0;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  h2 {
    font-size: var(--font-size-md);
    font-family: var(--font-family-heading);
    margin: 0;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  h3 {
    font-size: var(--font-size-sm);
    font-family: var(--font-family-heading);
    margin: 0;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  h4 {
    font-size: var(--font-size-xs);
    font-family: var(--font-family-heading);
    margin: 0;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  p {
    font-size: var(--font-size-sm);
    margin: 0;
    margin-bottom: 1rem;
    line-height: 1.5;
  }


  @media (max-width: 768px) {
    :root {
      --font-size-xs: 0.8rem;
      --font-size-sm: 1rem;
      --font-size-md: 1.2rem;
      --font-size-lg: 1.5rem;
    }
  }
`;
