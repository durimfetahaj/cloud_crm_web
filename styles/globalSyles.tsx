import { GlobalStyles as MUIGlobalStyles } from "@mui/material";

export default function GlobalStyles() {
  const inputGlobalStyles = (
    <MUIGlobalStyles
      styles={{
        "*": {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
        },
        html: {
          height: "100%",
          scrollBehavior: "smooth",
        },
        body: {
          height: "100%",
          overflowX: "hidden",
          overflowY: "auto",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          scrollBehavior: "smooth",
        },
        "#root": {
          height: "100%",
        },
      }}
    />
  );

  return inputGlobalStyles;
}
