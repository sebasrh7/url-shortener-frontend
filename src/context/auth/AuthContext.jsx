import { initialState, reducer } from "@/reducer/auth/AuthReducer";
import { createContext, useEffect, useReducer, useState } from "react";

// Create a context to store the user data
export const AuthContext = createContext();

// Create a provider to wrap the app and provide the user data
export const AuthProvider = ({ children }) => {
  // Use the reducer to update the user data
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(true);

  // Save the user data to the local storage and update the state
  useEffect(() => {
    try {
      const loginInfo = new URLSearchParams(window.location.search).get(
        "loginInfo"
      );

      if (loginInfo) {
        const { jwt, user } = JSON.parse(loginInfo);
        dispatch({ type: "LOGIN", payload: { jwt, user } });
        // Remove loginInfo from URL
        window.history.replaceState({}, document.title, "/");
      } else {
        const jwt = localStorage.getItem("jwt");
        const user = localStorage.getItem("user");

        if (jwt && user) {
          dispatch({ type: "PROFILE", payload: { jwt, user } });
        }
      }

      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, []);

  // Login the user
  const login = () => {
    window.open(`${import.meta.env.VITE_API_URL}/login`, "_self");
  };

  // Logout the user
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    window.open(`${import.meta.env.VITE_API_URL}/logout`, "_self");
  };

  return (
    <AuthContext.Provider value={{ state, dispatch, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
