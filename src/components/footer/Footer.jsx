import { Link, Box, Typography } from "@mui/material";
import "./Footer.css";

const Footer = () => {
  return (
    <Box
      paddingBlock={2}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      component={"footer"}
      position="fixed"
    >
      <Typography variant="body1" color="textSecondary">
        Made using{" "}
        <Link
          href="https://material-ui.com/"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
        >
          Material-UI
        </Link>{" "}
        &{" "}
        <Link
          href="https://www.ag-grid.com/"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
        >
          AG Grid
        </Link>
      </Typography>

      <Typography variant="body1" color="textSecondary">
        <Link
          href="https://github.com/sebasrh7/url-shortener"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
        >
          Source Code
        </Link>{" "}
        by{" "}
        <Link
          href="https://github.com/sebasrh7"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
        >
          @sebasrh7
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
