import { GuestProvider } from "@/context/guest/GuestContext";
import { useAuth } from "@/hooks/auth/useAuth";
import GuestPage from "@/pages/guest/GuestPage";
import LoggedInPage from "@/pages/loggedIn/LoggedInPage";
import Loading from "@/components/loading/Loading";

const Index = () => {
  const {
    state: { isAuthenticated },
    loading,
  } = useAuth();

  return (
    <>
      {loading ? (
        <Loading />
      ) : isAuthenticated ? (
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
