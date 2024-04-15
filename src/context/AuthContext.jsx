import { createContext, useReducer, useEffect } from "react";

// Create a context to store the user data
export const AuthContext = createContext();

// Initialize the user data from the local storage
const initialState = {
  isAuthenticated: false,
  jwt: null,
  user: null,
};

// Create a reducer to update the user data
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("jwt", action.payload.jwt);
      localStorage.setItem("user", action.payload.user);
      return {
        ...state,
        isAuthenticated: true,
        jwt: action.payload.jwt,
        user: JSON.parse(action.payload.user),
      };
    case "PROFILE":
      return {
        ...state,
        isAuthenticated: true,
        jwt: action.payload.jwt,
        user: JSON.parse(action.payload.user),
      };
    case "LOGOUT":
      localStorage.removeItem("jwt");
      localStorage.removeItem("user");
      return {
        ...state,
        isAuthenticated: false,
        jwt: null,
        user: null,
      };
    default:
      return state;
  }
};

// Create a provider to wrap the app and provide the user data
export const AuthProvider = ({ children }) => {
  // Use the reducer to update the user data
  const [state, dispatch] = useReducer(reducer, initialState);

  // // Save the user data to the local storage and update the state
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
      }

      const jwt = localStorage.getItem("jwt");
      const user = localStorage.getItem("user");

      if (jwt && user) {
        dispatch({ type: "PROFILE", payload: { jwt, user } });
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
