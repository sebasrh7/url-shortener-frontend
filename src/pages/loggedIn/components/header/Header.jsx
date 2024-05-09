import LinkIcon from "@/components/icons/Link";
import MoonIcon from "@/components/icons/Moon";
import SunIcon from "@/components/icons/Sun";
import { useColorMode } from "@/hooks/mode/useColorMode";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import AccountMenu from "../menu/accountMenu";

const Header = () => {
  const { theme, colorMode } = useColorMode();

  return (
    <Box component={"header"} borderBottom={1} borderColor="divider">
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar className="header-toolbar">
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{ flexGrow: 1, display: "flex", alignItems: "center", gap: 1 }}
          >
            <LinkIcon />
            Shorten URL
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <AccountMenu />

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
