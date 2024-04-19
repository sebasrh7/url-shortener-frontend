import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import "./Header.css";
import { useAuth } from "@/hooks/auth/useAuth";

const Header = () => {
  const { login } = useAuth();

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar className="header-toolbar">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          🔗Url Shortener
        </Typography>
        <Button color="inherit" variant="outlined" onClick={login}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
