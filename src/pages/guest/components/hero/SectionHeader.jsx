import { Box, Typography } from "@mui/material";

const SectionHeader = () => {
  return (
    <Box component={"header"} textAlign="center" sx={{ mb: 4 }} >
      <Typography variant="h1" gutterBottom className="title">
        Shorten Your Looooong Urls :D
      </Typography>
      <Typography variant="subtitle1" className="subtitle">
        URL Shortener is an efficient and easy-to-use URL shortening service.
      </Typography>
    </Box>
  );
};

export default SectionHeader;
