import axios from "axios";
import { createContext, useState, useContext } from "react";

const AuthContext = createContext({
  user: null,
  setUser: () => {},
  login: () => {},
  logout: () => {},
  loading: false,
});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (credentials) => {
    setLoading(true);
    try {
      const response = await axios.post("api/login", credentials);
      if (response && response.data) {
        const token = response.data.token;
        localStorage.setItem("token", token);

        const userResponse = await axios.get("api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        return userResponse.data.user;
      }
    } catch (error) {
      console.error("Error displaying data", {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message,
      });

      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
