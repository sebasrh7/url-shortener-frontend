import { colors } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { createContext, useEffect, useMemo, useState } from "react";

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
          main:
            mode === "light" ? colors.deepPurple[500] : colors.deepPurple[200],
          light:
            mode === "light" ? colors.deepPurple[200] : colors.deepPurple[500],
          dark:
            mode === "light" ? colors.deepPurple[900] : colors.deepPurple[100],

          contrastText:
            mode === "light" ? colors.common.white : colors.common.black,
        },
        secondary: {
          main: colors.orange[500],
          light: colors.orange[200],
          dark: colors.orange[900],
          contrastText:
            mode === "light" ? colors.common.black : colors.common.white,
        },
        background: {
          default: mode === "light" ? colors.common.white : colors.grey[900],
          paper: mode === "light" ? colors.common.white : colors.grey[800],
        },
      },

      components: {
        MuiDataGrid: {
          styleOverrides: {
            root: {
              border: "none",

              "& .MuiDataGrid-columnHeader": {
                //backgroundColor:
                 // mode === "light" ? colors.grey[50] : colors.grey[800],

                "&:focus-within": {
                  outline: "none",
                },
              },
           
              "& .MuiDataGrid-row": {
                //backgroundColor:
                //  mode === "light" ? colors.common.white : colors.grey[700],
                "&:hover": {
                  backgroundColor:
                    mode === "light" ? colors.grey[100] : colors.grey[850],
                },
              },
              "& .MuiDataGrid-cell": {
                borderTop: "none",
                "&:focus-within": {
                  outline: "none",
                },
              },
              "& .MuiDataGrid-main ": {
                borderRadius: "inherit",
              },
              "& .MuiDataGrid-withBorderColor": {
                border: "none",
              },
            },
          },
        },
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              backgroundColor:
                mode === "light" ? colors.common.white : colors.grey[800],
              "& fieldset": {
                border: "none",
              },
              "& .MuiInputBase-input:-webkit-autofill": {
                "-webkit-box-shadow": `0 0 0 100px ${
                  mode === "light" ? colors.common.white : colors.grey[800]
                } inset`,
              },

              border: "1px solid",
              borderColor:
                mode === "light" ? colors.grey[300] : colors.grey[700],

              "&.Mui-focused": {
                borderColor:
                  mode === "light"
                    ? colors.deepPurple[500]
                    : colors.deepPurple[200],
              },
            },
          },
        },

        MuiFormHelperText: {
          styleOverrides: {
            root: {
              "&.Mui-error": {
                color: mode === "light" ? colors.red[500] : colors.red[300],
              },
            },
          },
        },

        MuiButton: {
          styleOverrides: {
            root: {
              textTransform: "none",
            },
          },
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
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
