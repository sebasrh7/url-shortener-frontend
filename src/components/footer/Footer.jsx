import { Link, Box, Typography, Toolbar } from "@mui/material";
import "./Footer.css";

const madeUsing = [
  {
    name: "React",
    url: "https://react.dev/",
  },
  {
    name: "Material-UI",
    url: "https://material-ui.com/",
  },
  {
    name: "AG Grid",
    url: "https://www.ag-grid.com/",
  },
  {
    name: "Tabler Icons",
    url: "https://tabler.io/",
  },
];

const sourceCode = [
  {
    name: "Source Code",
    url: "https://github.com/sebasrh7/url-shortener",
  },
  {
    name: "@sebasrh7",
    url: "https://github.com/sebasrh7",
  },
];

const showLinks = (links) => {
  const lastIndex = links.length - 1;
  return links.map((link, index) => (
    <Box key={link.name} component="span">
      <Link
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        underline="hover"
      >
        {link.name}
      </Link>
      {index < lastIndex - 1 && ", "}
      {index === lastIndex - 1 && links.length > 2 && " & "}
      {index === lastIndex - 1 && links.length === 2 && " | "}
    </Box>
  ));
};
const Footer = () => {
  return (
    <Box component="footer" className="footer">
      <Toolbar className="footer-content">
        <Typography variant="body1" color="textSecondary" sx={{ flexGrow: 1 }}>
          Made using {showLinks(madeUsing)}
        </Typography>

        <Typography variant="body1" color="textSecondary">
          {showLinks(sourceCode)}
        </Typography>
      </Toolbar>
    </Box>
  );
};

export default Footer;
