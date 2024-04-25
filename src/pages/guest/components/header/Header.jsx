import LinkIcon from "@/components/icons/Link";
import { useAuth } from "@/hooks/auth/useAuth";
import {useColorMode} from "@/hooks/mode/useColorMode";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import "./Header.css";
import Smile from "@/components/icons/Smile";
import Wink from "@/components/icons/Wink";

const Header = () => {
  const { login } = useAuth();
  const { theme, colorMode } = useColorMode();

  return (
    <AppBar position="static" color="primary" elevation={1}>
      <Toolbar className="header-toolbar">
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: "flex", alignItems: "center", gap: 1 }}
        >
          <LinkIcon />
          Shorten URL
        </Typography>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "light" ? <Smile /> : <Wink />}
        </IconButton>
        <Button color="inherit" variant="outlined" onClick={login}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
