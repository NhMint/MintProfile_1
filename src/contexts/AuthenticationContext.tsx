import React, { createContext, useState } from 'react';
export const AuthContext = createContext<any>(null);
export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);
  const login = (userData: any) => {
    setUser(userData);
  };
  const logout = () => {
    setUser(null); 
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};