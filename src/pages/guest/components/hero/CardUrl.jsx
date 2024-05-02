import CopyIcon from "@/components/icons/Copy";
import useGuestUrl from "@/hooks/guest/useGuestUrl";
import {
  Box,
  IconButton,
  Link,
  Paper,
  Snackbar,
  Typography,
} from "@mui/material";
import { useState } from "react";

const CardUrl = () => {
  const { url } = useGuestUrl();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(url.shortUrl);
    setSnackbarOpen(true);
  };

  return (
    <Box
      component="section"
      maxWidth={700}
      height="100%"
      marginInline="auto"
      className="cardurl"
    >
      <Box component={Paper} minHeight={100} p={2} elevation={3}>
        {url ? (
          <UrlInfo url={url} handleCopyClick={handleCopyClick} />
        ) : (
          <Typography variant="body2" color="textSecondary" align="center">
            No URL shortened yet.
          </Typography>
        )}
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        message="URL copied to clipboard"
      />
    </Box>
  );
};

const UrlInfo = ({ url, handleCopyClick }) => {
  return (
    <Box display="flex" flexDirection="column" height="100%" gap={1}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Link
          href={url.shortUrl}
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          color="inherit"
        >
          <span className="shorturlid">/</span>
          {url.shortUrlId}
        </Link>
        <IconButton aria-label="copy" color="inherit" onClick={handleCopyClick}>
          <CopyIcon />
        </IconButton>
      </Box>

      <Typography
        variant="body2"
        color="textSecondary"
        noWrap
        width="100%"
        title={url.originalUrl}
      >
        {url.originalUrl}
      </Typography>
    </Box>
  );
};

export default CardUrl;
