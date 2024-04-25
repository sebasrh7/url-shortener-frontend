import Shortener from "../shortener/Shortener";
import { Typography } from "@mui/material";
import "./Hero.css";
import CardUrl from "../card/CardUrl";

const Hero = () => {
  return (
    <div className="hero">
      <Typography variant="h1" fontSize={76} className="title">
        Shorten Your Looooong Urls :D
      </Typography>
      <Typography variant="body1">
        URL Shortener is an efficient and easy-to-use URL shortening service.
      </Typography>
      <Shortener />
      <CardUrl />
    </div>
  );
};

export default Hero;
