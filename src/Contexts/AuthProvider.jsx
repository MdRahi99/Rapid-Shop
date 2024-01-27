/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = async (data) => {
    try {
      const response = await axios.post("https://rapid-shop-server.vercel.app/api/register", data);
      setUser(response.data.user);
    } catch (error) {
      throw new Error("Registration failed");
    }
  };

  const login = async (data) => {
    try {
      const response = await axios.post("https://rapid-shop-server.vercel.app/api/login", data);

      const token = response.data.token;

      if (token) {
        localStorage.setItem("token", token);
        setUser(response.data.user);
      } else {
        throw new Error("No token found");
      }
    } catch (error) {
      throw new Error("Sign In failed");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      const token = localStorage.getItem("token");
      if (!token || user) return;

      try {
        const response = await axios.get("https://rapid-shop-server.vercel.app/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data.user);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkUserLoggedIn();
  }, [user]);

  const authInfo = { user, createUser, login, logout, loading };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};
