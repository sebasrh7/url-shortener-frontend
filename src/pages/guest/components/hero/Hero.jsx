import Shortener from "../shortener/Shortener";
import { Typography } from "@mui/material";
import "./Hero.css";
import Url from "../url/Url";

const Hero = () => {
  return (
    <div className="hero">
      <Typography variant="h1">Shorten Your Long Urls :D</Typography>
      <Typography variant="body1">
        URL Shortener is an efficient and easy-to-use URL shortening service.
      </Typography>
      <Shortener />
      <Url />
    </div>
  );
};

export default Hero;
