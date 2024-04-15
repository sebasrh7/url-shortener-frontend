import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
  // Get the context
  const context = useContext(AuthContext);

  // Validate that the context exists
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
};
