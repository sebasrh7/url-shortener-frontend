import { Typography, useMediaQuery } from "@mui/material";
import "./Hero.css";
import { Box } from "@mui/material";

const Hero = () => {
  return (
    <Box component={"section"} className="hero" display="flex" flexDirection="column" gap={2}>
      <Typography variant="h1" textAlign="center" className="hero-title">
        Shorten Your Looooong Urls :D
      </Typography>
      <Typography variant="body1" textAlign="center" className="hero-description">
        URL Shortener is an efficient and easy-to-use URL shortening service.
      </Typography>
    </Box>
  );
};

export default Hero;
