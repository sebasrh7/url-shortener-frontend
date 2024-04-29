import CopyIcon from "@/components/icons/Copy";
import useGuestUrl from "@/hooks/guest/useGuestUrl";
import { Box, IconButton, Link, Paper, Typography } from "@mui/material";

const CardUrl = () => {
  const { url } = useGuestUrl();

  return (
    <>
      {url && (
        <Box
          component={"section"}
          maxWidth={700}
          marginInline={"auto"}
          className="cardurl"
        >
          <Box
            component={Paper}
            p={2}
            elevation={3}
            display="flex"
            flexDirection="column"
            gap={1}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent={"space-between"}
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
              <IconButton
                aria-label="copy"
                color="inherit"
                onClick={() => navigator.clipboard.writeText(url.shortUrl)}
              >
                <CopyIcon />
              </IconButton>
            </Box>

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
        </Box>
      )}
    </>
  );
};

export default CardUrl;
