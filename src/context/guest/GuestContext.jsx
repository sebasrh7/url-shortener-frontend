import { createContext, useState } from "react";

// Create a context to store the guest URL
export const GuestContext = createContext();

// Create a provider to wrap the app and provide the guest URL
export const GuestProvider = ({ children }) => {
  const [url, setUrl] = useState(null);

  return (
    <GuestContext.Provider value={{ url, setUrl }}>
      {children}
    </GuestContext.Provider>
  );
};
