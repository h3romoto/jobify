import React, { useReducer, useState, useContext } from "react";
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_BEGIN,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  VM_BUILD_BEGIN,
  VM_BUILD_SUCCESS,
  VM_BUILD_ERROR,
  VM_CONNECT_BEGIN,
  VM_CONNECT_SUCCESS,
  VM_CONNECT_ERROR,
  VM_DESTROY_BEGIN,
  VM_DESTROY_SUCCESS,
  VM_DESTROY_ERROR,
} from "./PaaSActions";
import reducer from "./PaaSReducer";
import axios from "axios";

const id = localStorage.getItem("id");
const specs = localStorage.getItem("specs");
const region = localStorage.getItem("region");
const tier = localStorage.getItem("tier");
const token = localStorage.getItem("token");

export const initialState = {
  // general
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  showSidebar: false,

  // user
  user: null,
  token: null,
  userLocation: null,

  // vm instance
  id: "",
  specs: {
    os: { name: "", ver: "" },
    ram: Number,
    storage: Number,
    cpu: Number,
  },
  region: "",
  tier: "",
  pub_key: "",
};

const PaaSContext = React.createContext();

const PaaSProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // CHANGE THIS TO PROPER PATH
  const authFetch = axios.create({
    baseURL: "/api/v1",
  });

  const displayAlert = () => {
    // must have type
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 2500);
  };

  const addInstanceToLocalStorage = ({ id, specs }) => {
    localStorage.setItem("id", id);
    localStorage.setItem("specs", specs);
    // localStorage.setItem("region", region);
    // localStorage.setItem("tier", tier);
  };

  const removeInstanceFromLocalStorage = () => {
    localStorage.removeItem("id", id);
    localStorage.removeItem("specs", specs);
    localStorage.removeItem("region", region);
    localStorage.removeItem("tier", tier);
  };


  const buildInstance = async (specs) => {
    dispatch({ type: VM_BUILD_BEGIN });
    try {
      // const response = await axios.post("/api/v1/auth/build", specs);
      console.log("Building...")
      dispatch({
        type: VM_BUILD_SUCCESS,
      });
    } catch (error) {
      console.log()
      dispatch({
        type: VM_BUILD_ERROR,
      });

      clearAlert();
    }
    addInstanceToLocalStorage({ id, specs });
  };

  return (
    <PaaSContext.Provider
    value={{
        ...state,
        displayAlert,
        buildInstance,
      }}
    >
      {children}
    </PaaSContext.Provider>
  )
};


export const usePaaSContext = () => {
  return useContext(PaaSContext);
};

export { PaaSProvider };
