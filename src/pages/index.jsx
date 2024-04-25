import { GuestProvider } from "@/context/guest/GuestContext";
import { useAuth } from "@/hooks/auth/useAuth";
import GuestPage from "@/pages/guest/GuestPage";
import LoggedInPage from "@/pages/loggedIn/LoggedInPage";
import Footer from "@/components/footer/Footer";
import { Container } from "@mui/material";
const Index = () => {
  const {
    state: { isAuthenticated },
  } = useAuth();

  return (
    <>
      {isAuthenticated ? (
        <LoggedInPage />
      ) : (
        <GuestProvider>
          <GuestPage />
        </GuestProvider>
      )}
      <Footer />
    </>
  );
};

export default Index;
