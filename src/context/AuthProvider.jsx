import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

    useEffect(() => {
    const stored = localStorage.getItem("token");
    if (stored) {
      const parsed = JSON.parse(stored);
      setToken(parsed);
    }
  }, []);

  const login = (token) => {
    console.log("token--",token);
 localStorage.setItem("token", JSON.stringify(token));
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
