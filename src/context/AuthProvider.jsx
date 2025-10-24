import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (current) => {
      setUser(current);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  const signGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const createEmailPass = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const update = (cur, displayName, photoURL) => {
    return updateProfile(cur, { displayName, photoURL });
  };
  const signinEmailPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const passwordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const signOutuser = () => {
    setLoading(true);
    return signOut(auth);
  };
  const authInfo = {
    cart,
    setCart,
    user,
    setUser,
    loading,
    setLoading,
    signGoogle,
    createEmailPass,
    update,
    signinEmailPass,
    passwordReset,
    signOutuser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;