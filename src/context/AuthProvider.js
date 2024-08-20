import React, { createContext, useContext, useState, useEffect } from "react";

// Create Context for Authentication
export const AuthContext = createContext();

// AuthProvider Component
export default function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  // Effect to check for existing user in localStorage
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        // Decode token to get user info (assuming token contains user info)
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        setAuthUser(decodedToken);
      } catch (error) {
        console.error("Error decoding token:", error);
        setAuthUser(null);
      }
    }
  }, []);

  // Function to log in a user
  const login = (user) => {
    setAuthUser(user);
    localStorage.setItem('token', user.token); // Store token in localStorage
  };

  // Function to log out a user
  const logout = () => {
    setAuthUser(null);
    localStorage.removeItem('token'); // Remove token from localStorage
  };

  return (
    <AuthContext.Provider value={{ authUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use authentication context
export const useAuth = () => useContext(AuthContext);


// // context/AuthProvider.js
// import React, { createContext, useContext } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const logout = () => {
//     // Perform logout logic here
//     console.log("Logging out...");
//     // e.g., clear user data, tokens, etc.
//   };

//   return (
//     <AuthContext.Provider value={{ logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
