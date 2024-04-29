import CssBaseline from "@mui/material/CssBaseline";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { createContext, useMemo, useState } from "react";

export const ColorModeContext = createContext();

export const ColorModeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  let theme = useMemo(() => {
    return createTheme({
      palette: {
        mode,
        // emphasize: {
        //   dark: "#6d1b7b",
        //   main: "#9c27b0",
        //   light: "#af52bf",
        //   contrastText: "#fff",
        // },
      },

      typography: {
        fontFamily: [
          "Poppins",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ].join(","),
        h1: {
          fontSize: "4.5rem",
        },
      },
    });
  }, [mode]);

  theme = responsiveFontSizes(theme);

  return (
    <ColorModeContext.Provider
      value={{
        colorMode,
        theme,
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
