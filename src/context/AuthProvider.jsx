import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
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
    return signInWithPopup(auth, googleProvider);
  };
  const createEmailPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const update = (cur, info) => {
    return updateProfile(cur, info);
  };
  const signinEmailPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signOutuser = () => {
    return signOut(auth);
  };
  const authInfo = {
    user,
    loading,
    signGoogle,
    createEmailPass,
    update,
    signinEmailPass,
    signOutuser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;