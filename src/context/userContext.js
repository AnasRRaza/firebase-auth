import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signOut,
  FacebookAuthProvider,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase-config"
import { useNavigate } from "react-router";

const UserContext = createContext({});

export const useUserContext = () => {
  return useContext(UserContext);
}

export const UserContextProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      if (res) {
        setUser(res);
        navigate("dashboard")
      } else {
        setUser(null);
      }
      setError("");
      setLoading(false);
    });
    return unsubscribe;
  }, [user]);

  const registerUser = async ({ name, email, password }) => {
    setLoading(true);
    try {
      const userInfo = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userInfo);
      if (userInfo) {
        navigate("dashboard")
      }
      await updateProfile(auth.currentUser, {
        displayName: name,
      })
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  const logInUser = async ({ email, password }) => {
    setLoading(true);
    try {
      const userInfo = await signInWithEmailAndPassword(auth, email, password);
      console.log(userInfo);
      if (userInfo) {
        navigate("dashboard")
      }
      throw new Error("");
    } catch (err) {
      setError(err.message);
      console.log(err.message);
      console.log(error);
    }
    finally {
      setLoading(false);
    }
  }

  const logOutUser = () => {
    setLoading(true);
    signOut(auth);
    navigate("/")
    setLoading(false);
  }

  const forgotPassword = async (email) => {
    return await sendPasswordResetEmail(auth, email);
  }

  const signInWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const user = await signInWithPopup(auth, provider);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    try {
      const userInfo = await signInWithPopup(auth, provider);
      console.log(user);
      setUser(userInfo)
      return user;
    } catch (error) {
      console.log(error.message);
    }
  }

  const providerValues = {
    loading,
    user,
    error,
    registerUser,
    logOutUser,
    logInUser,
    forgotPassword,
    signInWithFacebook,
    signInWithGoogle,
  }

  return (
    <UserContext.Provider value={providerValues}>
      {children}
    </UserContext.Provider>
  )
}