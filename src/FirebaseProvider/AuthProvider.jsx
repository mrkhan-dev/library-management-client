import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import {createContext, useEffect, useState} from "react";

import PropTypes from "prop-types";
import axios from "axios";
import auth from "../firebaseConfig/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  //   create user
  const createUer = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   login user
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // update profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // sign out
  const logOut = async () => {
    await axios.post("https://shelfmaster-bdserver.vercel.app/logout");
    setUser(null);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedInUser = {email: userEmail};

      setLoading(false);
      // console.log(currentUser);
      setUser(currentUser);

      if (currentUser) {
        axios
          .post("https://shelfmaster-bdserver.vercel.app/jwt", loggedInUser, {
            withCredentials: true,
          })
          .then(() => {
            // console.log(result.data);
          });
      } else {
        axios
          .post(
            "https://shelfmaster-bdserver.vercel.app/logout",
            loggedInUser,
            {
              withCredentials: true,
            }
          )
          .then(() => {
            // console.log(res.data);
          });
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user]);

  const values = {
    user,
    loading,
    createUer,
    login,
    googleLogin,
    updateUserProfile,
    logOut,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
