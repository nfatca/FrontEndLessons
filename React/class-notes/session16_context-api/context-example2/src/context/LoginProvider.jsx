import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

//! 1-) Creating Login Context
export const LoginContext = createContext();

//! 2-) Providing

const LoginProvider = ({ children }) => {
  // props.children
  const [user, setUser] = useState({ email: "", password: "" });

  const values = { user, setUser };

  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  );
};

//! Consuming Custom Hook

export const useLoginContext = () => {
  return useContext(LoginContext);
};

export default LoginProvider;
