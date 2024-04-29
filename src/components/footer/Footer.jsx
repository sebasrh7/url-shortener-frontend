import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import EmailIcon from "../icons/Email";
import GithubIcon from "../icons/Github";
import LinkIcon from "../icons/Link";
import LinkedinIcon from "../icons/Linkedin";
import "./Footer.css";

const madeUsing = [
  {
    id: 1,
    name: "React",
    url: "https://react.dev/",
  },
  {
    id: 2,
    name: "Material-UI",
    url: "https://material-ui.com/",
  },
  {
    id: 3,
    name: "AG Grid",
    url: "https://www.ag-grid.com/",
  },
  {
    id: 4,
    name: "Tabler Icons",
    url: "https://tabler.io/icons",
  },
];

const sourceCode = [
  {
    id: 1,
    name: "Source Code",
    url: "https://github.com/sebasrh7/url-shortener",
  },
  {
    id: 2,
    name: "Report an issue",
    url: "https://github.com/sebasrh7/url-shortener/issues/new/choose",
  },
];

const contact = [
  {
    id: 1,
    name: "Github",
    url: "https://github.com/sebasrh7",
    icon: <GithubIcon />,
  },
  {
    id: 2,
    name: "Linkedin",
    url: "https://www.linkedin.com/in/sebasrh7/",
    icon: <LinkedinIcon />,
  },
  {
    id: 3,
    name: "Email",
    url: "mailto: sebastianrengifohidalgo@gmail.com",
    icon: <EmailIcon />,
  },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      className="footer"
      bgcolor={"primary.dark"}
      color={"primary.contrastText"}
    >
      <Grid container justifyContent={"space-between"} spacing={2}>
        <Grid item xs={12} md={4}>
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <LinkIcon width={32} height={32} />
            Shorten URL
          </Typography>

          {/* Descripcion */}
          <Typography variant="body1" mt={2}>
            A free URL shortening service that allows you to share links on
            different platforms.
          </Typography>

          <Typography variant="body2" mt={2} color={"primary.light"}>
            &copy; {new Date().getFullYear()} Some rights reserved.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <List disablePadding>
                <ListItem sx={{ paddingBlock: "2px", paddingInline: "12px" }}>
                  <Typography variant="overline" fontWeight="bold">
                    Made using
                  </Typography>
                </ListItem>
                {madeUsing.map((item) => (
                  <ListItem key={item.id} disablePadding>
                    <ListItemButton
                      sx={{ paddingBlock: "2px", paddingInline: "12px" }}
                      component="a"
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ListItemText primary={item.name} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} md={4}>
              <List disablePadding>
                <ListItem sx={{ paddingBlock: "2px", paddingInline: "12px" }}>
                  <Typography variant="overline" fontWeight="bold">
                    Source Code
                  </Typography>
                </ListItem>
                {sourceCode.map((item) => (
                  <ListItem key={item.id} disablePadding>
                    <ListItemButton
                      sx={{ paddingBlock: "2px", paddingInline: "12px" }}
                      component="a"
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ListItemText primary={item.name} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} md={4}>
              <List disablePadding>
                <ListItem sx={{ paddingBlock: "2px", paddingInline: "12px" }}>
                  <Typography variant="overline" fontWeight="bold">
                    Contact
                  </Typography>
                </ListItem>
                {contact.map((item) => (
                  <ListItem key={item.id} disablePadding>
                    <ListItemButton
                      sx={{ paddingBlock: "2px", paddingInline: "12px" }}
                      component="a"
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ListItemIcon sx={{ minWidth: "auto", mr: 1 }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.name} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
