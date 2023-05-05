export default function Button(theme: any) {
  return {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          "&:hover": {
            backgroundColor: `${theme.palette.primary.main}`,
            opacity: 0.9,
            boxShadow: "none",
          },
        },
        text: {
          "&:hover": {
            backgroundColor: "transparent",
            opacity: 0.9,
            boxShadow: "none",
          },
        },
      },
    },
  };
}
