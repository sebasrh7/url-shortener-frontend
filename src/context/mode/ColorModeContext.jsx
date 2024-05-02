import CssBaseline from "@mui/material/CssBaseline";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { createContext, useEffect, useMemo, useState } from "react";
import { colors } from "@mui/material";

export const ColorModeContext = createContext();

export const ColorModeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    const storedMode = localStorage.getItem("colorMode");
    return storedMode ? storedMode : "dark";
  });


  useEffect(() => {
    localStorage.setItem("colorMode", mode);
  }, [mode]);

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
        primary: {
          main: mode === "light" ? colors.deepPurple[500] : colors.deepPurple[200],
          light: mode === "light" ? colors.deepPurple[200] : colors.deepPurple[500],
          dark: mode === "light" ? colors.deepPurple[900] : colors.deepPurple[100],

          contrastText: mode === "light" ? colors.common.white : colors.common.black,
        },
        background: {
          default: mode === "light" ? colors.common.white : colors.grey[900],
          paper: mode === "light" ? colors.common.white : colors.grey[800],
        },
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
