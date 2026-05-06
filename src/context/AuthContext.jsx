import { useCallback, useMemo, useState } from "react";
import { signIn, signUp } from "../api/auth";
import { AuthContext } from "./authContextCore";

function getStoredUser() {
  try {
    return JSON.parse(localStorage.getItem("user") || "null");
  } catch {
    return null;
  }
}

function getAuthData(data) {
  const user = data.user || data;
  const token = user?.token || data.token;

  if (!user || !token) {
    throw new Error("Ошибка: сервер не прислал токен доступа");
  }

  return { user, token };
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getStoredUser);
  const [token, setToken] = useState(() => localStorage.getItem("token") || "");

  const saveAuthData = useCallback((authData) => {
    const { user: authUser, token: authToken } = getAuthData(authData);

    localStorage.setItem("user", JSON.stringify(authUser));
    localStorage.setItem("token", authToken);
    setUser(authUser);
    setToken(authToken);

    return authUser;
  }, []);

  const login = useCallback(
    async ({ login: userLogin, password }) => {
      const data = await signIn({ login: userLogin, password });
      return saveAuthData(data);
    },
    [saveAuthData]
  );

  const register = useCallback(
    async ({ name, login: userLogin, password }) => {
      const data = await signUp({ name, login: userLogin, password });
      return saveAuthData(data);
    },
    [saveAuthData]
  );

  const logout = useCallback(() => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setToken("");
  }, []);

  const value = useMemo(
    () => ({
      user,
      token,
      isAuth: Boolean(token),
      login,
      register,
      logout,
    }),
    [user, token, login, register, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
