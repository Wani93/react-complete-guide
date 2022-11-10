import React, {useEffect, useState} from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {
  },
  onLogin: (email, password) => {
  }
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);
  
  const logoutHandler = () => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(false);
  }
  const loginHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(true);
  }

  return <AuthContext.Provider value={{
    isLoggedIn,
    onLogout: logoutHandler,
    onLogin: loginHandler
  }}>{props.children}</AuthContext.Provider>
}

export default AuthContext