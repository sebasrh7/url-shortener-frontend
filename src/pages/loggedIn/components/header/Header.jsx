import MoonIcon from "@/components/icons/Moon";
import SunIcon from "@/components/icons/Sun";
import { useColorMode } from "@/hooks/mode/useColorMode";
import {
  AppBar,
  Box,
  IconButton,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import AccountMenu from "../menu/accountMenu";
import Shortener from "./Shortener";

const Header = () => {
  const { theme, colorMode } = useColorMode();

  const [state, setState] = useState({
    checkedA: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Box component={"header"} borderBottom={1} borderColor="divider">
      <AppBar position="static" color="primary" elevation={0}>
        <Toolbar className="header-toolbar">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              paddingBlock: 2,
              gap: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: 4,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Typography
                  variant="h6"
                  color="inherit"
                  noWrap
                  fontWeight={700}
                >
                  URL Shortener
                </Typography>
              </Box>

              <Shortener />

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <AccountMenu />
                <IconButton onClick={colorMode.toggleColorMode} color="inherit">
                  {theme.palette.mode === "light" ? <MoonIcon /> : <SunIcon />}
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
