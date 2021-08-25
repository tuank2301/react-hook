import React, { createContext, useEffect, useReducer } from 'react';
import { authReducer } from '../reducers/AuthReducer';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  // State
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [isAuthenticated, dispatch] = useReducer(authReducer, false);

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
    dispatch,
  };

  //return
  return (
    <AuthContext.Provider value={AuthContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
