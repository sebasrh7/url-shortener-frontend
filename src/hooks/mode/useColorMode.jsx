import { useContext } from "react";
import { ColorModeContext } from "@/context/mode/ColorModeContext";

export const useColorMode = () => {
  // Get the context
  const context = useContext(ColorModeContext);

  // Validate that the context exists
  if (!context) {
    throw new Error("useColorMode must be used within a ColorModeProvider");
  }

  return context;
};
