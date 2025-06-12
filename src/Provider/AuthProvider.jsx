// src/context/AuthProvider.jsx
import React, { createContext, useEffect, useState } from 'react';
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
} from 'firebase/auth';
import { auth } from '../firebase.init';

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };


    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };


    const createAccount = (email, password, name, photoURL) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) =>
                updateProfile(user, { displayName: name, photoURL }).then(() => {
                    setUser({ ...user, displayName: name, photoURL });
                })
            );
    };

    const LoginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Track auth state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        loading,
        googleLogin,
        logOut,
        createAccount,
        LoginUser
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
