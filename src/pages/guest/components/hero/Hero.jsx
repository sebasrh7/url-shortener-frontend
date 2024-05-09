import { Box, Container } from "@mui/material";
import CardUrl from "./CardUrl";
import "./Hero.css";
import SectionHeader from "./SectionHeader";
import Shortener from "./Shortener";

const Hero = () => {
  return (
    <Box
      component={"section"}
      className="hero"
     
    >
      <Container>
        <SectionHeader />
        <Shortener />
        <CardUrl />
      </Container>
    </Box>
  );
};

export default Hero;
