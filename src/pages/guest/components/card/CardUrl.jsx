import CopyIcon from "@/components/icons/Copy";
import useGuestUrl from "@/hooks/guest/useGuestUrl";
import { Box, IconButton, Link, Paper, Typography } from "@mui/material";
import "./CardUrl.css";

const CardUrl = () => {
  const { url } = useGuestUrl();

  return (
    <>
      <Box
        component={Paper}
        p={2}
        maxWidth={400}
        width="100%"
        minHeight={"min-content"}
        height="100%"
      >
        <Typography variant="h6">
          {url ? "Your Shortened URL" : "Shorten your URL to get started"}
        </Typography>

        {url && (
          <Box
            display="flex"
            flexDirection={"column"}
            alignItems={"start"}
            width="100%"
            mt={2}
            gap={1}
          >
            <Link
              href={url.shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              color={"inherit"}
            >
              <span className="shorturlid">/</span>
              {url.shortUrlId}
            </Link>

            <Typography
              variant="body2"
              color="textSecondary"
              noWrap
              width="100%"
              title={url.originalUrl}
              align="start"
            >
              {url.originalUrl}
            </Typography>
          </Box>
        )}
      </Box>
    </>
  );
};

export default CardUrl;
