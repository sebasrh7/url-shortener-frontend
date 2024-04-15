import { useAuth } from "../hooks/useAuth";
import Grid from "../components/Grid";

const LoginPage = () => {
  const {
    state: { user },
    dispatch,
  } = useAuth();

  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "LOGOUT" });
        }}
      >
        Logout
      </button>

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

export default LoginPage;
