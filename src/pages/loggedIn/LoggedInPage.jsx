import Table from "./components/table/Table";
import { Box } from "@mui/material";
import Header from "./components/header/Header";
import Footer from "@/components/footer/Footer";

const LoggedInPage = () => {
  return (
    <>
      <Header />
      <Box component={"main"} className="logged-in-page">
        <Table />
      </Box>
      <Footer />
    </>
  );
};

export default LoggedInPage;
