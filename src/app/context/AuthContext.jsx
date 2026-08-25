"use client";

import { createContext, useContext, useState, useMemo } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setUser({ email, name: email.split("@")[0] });
    setLoading(false);
  };

  const signup = async (name, email, password) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setUser({ email, name });
    setLoading(false);
  };

  const logout = () => setUser(null);

  const value = useMemo(
    () => ({
      user,
      loading,
      login,
      signup,
      logout,
      isAuthenticated: !!user,
    }),
    [user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
