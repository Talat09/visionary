/* eslint-disable react/prop-types */
// AuthContext.js (or wherever your context is defined)
import { useState, useEffect, createContext, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check for user in local storage or session storage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser); // Restore user from localStorage if available
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Optionally store user data in localStorage
  };
const register =(userData)=>{
  setUser(userData);
  localStorage.setItem("user", JSON.stringify(userData));
}
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Optionally clear user data from localStorage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout,register }}>
      {children}
    </AuthContext.Provider>
  );
};
