import { useContext } from "react";
import { RootContext } from "../contexts/RootContext";

const useRootContext = () => {
  const context = useContext(RootContext);
  if (!context) {
    throw new Error("useRootContext must be used within a RootContextProvider");
  }
  return context;
};

export default useRootContext;
