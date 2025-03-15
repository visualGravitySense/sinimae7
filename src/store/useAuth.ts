import { create } from "zustand";
import { auth, loginWithGoogle, logout } from "../firebase";
import { onAuthStateChanged, User } from "firebase/auth";

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
};

// Глобальное хранилище авторизации
export const useAuth = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async () => {
    await loginWithGoogle();
  },
  logout: async () => {
    await logout();
  },
}));

// Подписываемся на изменения в аутентификации
onAuthStateChanged(auth, (user) => {
  useAuth.setState({ user, isAuthenticated: !!user });
});
