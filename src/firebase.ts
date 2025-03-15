import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDsa5PfGaPkv-h-UYI95UyvUazNg5t6CcE",
    authDomain: "sinimae7-b2176.firebaseapp.com",
    projectId: "sinimae7-b2176",
    storageBucket: "sinimae7-b2176.firebasestorage.app",
    messagingSenderId: "678545377321",
    appId: "1:678545377321:web:3ff33f435c3e947e433438",
    measurementId: "G-YNLD83K44K"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Функции для входа и выхода
const loginWithGoogle = async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error("Ошибка входа:", error);
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Ошибка выхода:", error);
  }
};

export { auth, loginWithGoogle, logout };
