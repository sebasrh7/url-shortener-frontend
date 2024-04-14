import "./App.css";
import { useContext } from "react";
import { UserContext } from "./context/AuthContext";
import Home from "./pages/Home";

function App() {
  const { state } = useContext(UserContext);
  return (
    <div className="App">
      <Home />
      <div>
        {state.isAuthenticated ? (
          <button
            onClick={() => {
              dispatch({ type: "LOGOUT" });
            }}
          >
            Logout
          </button>
        ) : (
          <a href="http://localhost:3000/login">Login with Google</a>
        )}

        {state.isAuthenticated && (
          <div>
            <h2>Welcome {state.user.displayName}</h2>
            <img src={state.user.picture} alt={state.user.displayName} />
          </div>
        )}

        <pre>{JSON.stringify(state, null, 2)}</pre>

        <footer>
          <p>
            This is a sample project to demonstrate how to use OAuth with Google
            in a full-stack application.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
