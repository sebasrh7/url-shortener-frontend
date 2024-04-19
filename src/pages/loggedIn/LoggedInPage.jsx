import { useAuth } from "@/hooks/auth/useAuth";
import Grid from "./components/grid/Grid";
import { Button } from "@mui/material";

const LoggedInPage = () => {
  const {
    state: { user },
    logout,
  } = useAuth();

  return (
    <div>
      <header>
        <Button onClick={logout}>Logout</Button>
      </header>

      <div>
        <h2>Welcome {user.displayName}</h2>
        <img src={user.picture} alt={user.displayName} />
      </div>
      <Grid />

      <footer>
        <p>
          This is a sample project to demonstrate how to use OAuth with Google
          in a full-stack application.
        </p>
      </footer>
    </div>
  );
};

export default LoggedInPage;
