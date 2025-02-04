import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import { useAuth } from "@/hooks/auth/useAuth";
import { useState } from "react";
import LogoutIcon from "@/components/icons/Logout";
import DeleteIcon from "@/components/icons/Delete";

export default function AccountMenu() {
  const {
    state: { user },
    logout,
  } = useAuth();

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <Avatar
          sx={{ width: 40, height: 40 }}
          alt={user.displayName}
          src={user.picture}
        />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          sx={{
            py: 2,
            cursor: "default",
            color: "text.secondary",
            "&:hover": {
              backgroundColor: "transparent",
            },
            "& .MuiAvatar-root": {
              ml: 0,
            },
            userSelect: "text",
          }}
          onClick={(e) => e.stopPropagation()}
          // quitar que se vean los estilos de hover
          disableRipple
        >
          <Avatar alt={user.displayName} src={user.picture} />
          {user.displayName}
        </MenuItem>

        <Divider />
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <LogoutIcon width={20} height={20} />
          </ListItemIcon>
          Logout
        </MenuItem>
        <MenuItem onClick={() => {}}>
          <ListItemIcon>
            <DeleteIcon width={20} height={20} />
          </ListItemIcon>
          Delete Account
        </MenuItem>
      </Menu>
    </>
  );
}
