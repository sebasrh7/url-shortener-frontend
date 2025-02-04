import LinkIcon from "@/components/icons/Link";
import MoonIcon from "@/components/icons/Moon";
import SunIcon from "@/components/icons/Sun";
import { useAuth } from "@/hooks/auth/useAuth";
import { useColorMode } from "@/hooks/mode/useColorMode";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import "./Header.css";

const Header = () => {
  const { login } = useAuth();
  const { theme, colorMode } = useColorMode();

  return (
    <Box component={"header"} height={64}>
      <AppBar position="fixed" elevation={0}>
        <Toolbar className="header-toolbar">
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}
          >
            URL Shortener
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Button color="inherit" variant="text" onClick={login}>
              Login
            </Button>

            <IconButton onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === "light" ? <MoonIcon /> : <SunIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
