import LinkIcon from "@/components/icons/Link";
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
import MoonIcon from "@/components/icons/Moon";
import SunIcon from "@/components/icons/Sun";

const Header = () => {
  const { login } = useAuth();
  const { theme, colorMode } = useColorMode();

  return (
    <AppBar position="static" >
      <Toolbar className="header-toolbar">
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{ flexGrow: 1, display: "flex", alignItems: "center", gap: 1 }}
        >
          <LinkIcon />
          Shorten URL
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          {theme.palette.mode} mode
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "light" ? <MoonIcon/> : <SunIcon />}
          </IconButton>
        </Box>
        {/* <Button color="inherit" variant="outlined" onClick={login}>
          Login
        </Button> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
