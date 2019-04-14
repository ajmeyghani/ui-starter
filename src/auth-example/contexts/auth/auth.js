import React, {createContext, useState} from "react";

const AuthContext = createContext();

function AuthProvider(props) {
  const [isAuth, setAuth] = useState(false);
  const login = () => {
    setTimeout(() => setAuth(true), 1000);
  };

  const logout = () => {
    setAuth(false);
  };

  const ctxValue = {
    isAuth,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={ctxValue}>
      {props.children}
    </AuthContext.Provider>
  );
}

export {
  AuthProvider,
  AuthContext,
};
