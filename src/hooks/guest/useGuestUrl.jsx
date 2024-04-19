import { useContext } from "react";
import { GuestContext } from "@/context/guest/GuestContext";

const useGuestUrl = () => {
  // Get the context
  const context = useContext(GuestContext);

  // Validate that the context exists
  if (!context) {
    throw new Error("useGuestUrl must be used within a GuestProvider");
  }

  return context;
};

export default useGuestUrl;
