import React, { useReducer, useState, useContext } from "react";
import reducer from "./reducer";
import { DISPLAY_ALERT } from "./action";

export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  aletType: "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    // must have type
    dispatch({ type: DISPLAY_ALERT });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
