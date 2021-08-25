import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  // State
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  // useEffect
  useEffect(() => {
    alert(
      isAuthenticated
        ? 'Login Successful'
        : 'You are logged our. Please login to see todos'
    );
  }, [isAuthenticated]);

  // Context data
  const AuthContextData = {
    isAuthenticated,
    toggleAuth,
  };

  //return
  return (
    <AuthContext.Provider value={AuthContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
