import React, { createContext, useContext, useReducer } from "react";
import storeReducer, { initialStore } from "./storeReducer";

const StoreContext = createContext();

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore need a StoreProvider");
  }
  return context;
};

export const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(storeReducer, initialStore());

  const value = {
    store,
    dispatch,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
