import { ReactNode, createContext, useState } from "react";

export const RootContext = createContext<any>(undefined);

const RootContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <RootContext.Provider
      value={{
        // States
        isLoggedIn,

        // State Handlers
        setIsLoggedIn,
      }}
    >
      {children}
    </RootContext.Provider>
  );
};

export default RootContextProvider;
