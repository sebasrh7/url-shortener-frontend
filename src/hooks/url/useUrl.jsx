import { useContext } from "react";
import { UrlContext } from "@/context/url/UrlContext";

const useUrl = () => {
  // Get the context
  const context = useContext(UrlContext);

  // Validate that the context exists
  if (!context) {
    throw new Error("useUrl must be used within a Url Provider");
  }

  return context;
};

export default useUrl;
