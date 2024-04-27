import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

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

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode,
      },
      typography: {
        h1: {
          fontSize: "4.5rem",
          "@media (max-width:900px)": {
            fontSize: "4rem",
          },
          "@media (max-width:600px)": {
            fontSize: "3rem",
          },
          "@media (max-width:400px)": {
            fontSize: "2.5rem",
          },
        },
        h6: {
          fontSize: "1.5rem",
          "@media (max-width:900px)": {
            fontSize: "1.25rem",
          },
          "@media (max-width:600px)": {
            fontSize: "1rem",
          },
          "@media (max-width:400px)": {
            fontSize: "0.75rem",
          },
        },
        body1: {
          fontSize: "1rem",
          "@media (max-width:900px)": {
            fontSize: "0.875rem",
          },
          "@media (max-width:600px)": {
            fontSize: "0.75rem",
          },
          "@media (max-width:400px)": {
            fontSize: "0.625rem",
          },
        },
        body2: {
          fontSize: "0.875rem",
          "@media (max-width:900px)": {
            fontSize: "0.75rem",
          },
          "@media (max-width:600px)": {
            fontSize: "0.625rem",
          },
          "@media (max-width:400px)": {
            fontSize: "0.5rem",
          },
        },
        overline: {
          fontSize: "0.75rem",
          "@media (max-width:900px)": {
            fontSize: "0.625rem",
          },
          "@media (max-width:600px)": {
            fontSize: "0.5rem",
          },
          "@media (max-width:400px)": {
            fontSize: "0.375rem",
          },
        },
      },
    });
  }, [mode]);

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
