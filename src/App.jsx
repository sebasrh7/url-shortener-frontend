import "./App.css";
import { useAuth } from "./hooks/useAuth";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  const {
    state: { isAuthenticated },
  } = useAuth();
  return (
    <div className="App">{isAuthenticated ? <LoginPage /> : <HomePage />}</div>
  );
}

export default App;
