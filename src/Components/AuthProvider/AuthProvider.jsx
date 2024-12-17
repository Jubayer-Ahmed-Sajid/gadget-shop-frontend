import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
 
  getAuth,
 
  GoogleAuthProvider,
 
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import app from "../../FirebaseConfig/firebaseConfig";
import axios from "axios";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth(app)
  const createUser = (email, password, firstName, lastName) => {
    setLoading(true);
    return createUserWithEmailAndPassword(
      auth,
      email,
      password,
      firstName,
      lastName
    );
  };
  const googleProvider =new GoogleAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if(currentUser){
        axios.post('http://localhost:5000/jwt',{email:currentUser.email})
        .then((data)=>{
          if(data.data){
            localStorage.setItem("access-token",data?.data?.token)
            setLoading(false)
          }
        })
      }
      else{
        localStorage.removeItem("access-token");
        setLoading(false);
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const authInfo = { createUser, googleLogin, login, logout, user, loading };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
