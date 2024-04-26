import { GuestProvider } from "@/context/guest/GuestContext";
import { useAuth } from "@/hooks/auth/useAuth";
import GuestPage from "@/pages/guest/GuestPage";
import LoggedInPage from "@/pages/loggedIn/LoggedInPage";
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
    </>
  );
};

export default Index;
