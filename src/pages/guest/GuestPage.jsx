import { Box } from "@mui/material";
import "./GuestPage.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";
const GuestPage = () => {
  return (
    <>
      <Header />
      <Box component={"main"} className="guest-page">
        <Hero />
        {/* <Features /> */}
      </Box>
    </>
  );
};

export default GuestPage;
