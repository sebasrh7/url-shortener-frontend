import { Container } from "@mui/material";
import "./GuestPage.css";
import CardUrl from "./components/card/CardUrl";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Shortener from "./components/shortener/Shortener";
const GuestPage = () => {
  return (
    <>
      <Header />
      <Container component={"main"} className="guest-page">
        <Hero />
        <Shortener />
        <CardUrl />
      </Container>
    </>
  );
};

export default GuestPage;
