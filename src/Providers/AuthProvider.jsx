import PropTypes from 'prop-types';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };
  const githubLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, githubProvider);
  };

  const updateUserData = (name, photo, email) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    }).then(() => {
      setUser({ ...user, displayName: name, photoURL: photo, email: email });
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      const userEmail = currentUser?.email || user?.email;
      const userInfo = { email: userEmail };
      setUser(currentUser);
      setLoader(false);
      if (currentUser) {
        axios
          .post('http://localhost:5000/jwt', userInfo, {
            withCredentials: true,
          })
          .then(res => console.log(res.data));
      } else {
        axios
          .post('http://localhost:5000/logout', userInfo, {
            withCredentials: true,
          })
          .then(res => console.log(res.data));
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user]);

  const logOut = () => {
    setLoader(true);
    setUser(null);
    return signOut(auth);
  };

  const authInfo = {
    user,
    createUser,
    loader,
    signIn,
    googleLogin,
    githubLogin,
    logOut,
    updateUserData,
    setLoader,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.any,
};

export default AuthProvider;
