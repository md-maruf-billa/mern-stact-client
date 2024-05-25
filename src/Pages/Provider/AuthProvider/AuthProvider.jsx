import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../FireBase/firebase';
export const studentDataContext = createContext();



const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);




    //--------------CREATE ACCOUNT WITH EMAIL AND PASSWORD---------------
    const createAccountUsingEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginAccountUsingEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }



    //------------LOG OUT USER-------------------------
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
            }
            else {
                setCurrentUser(null);
            }
            setLoading(false);
        })
    }, [loading])
    const studentInfo = {
        loading,
        setLoading,
        createAccountUsingEmail,
        loginAccountUsingEmail,
        currentUser,
        logOut
    }
    return (
        <studentDataContext.Provider value={studentInfo}>
            {children}
        </studentDataContext.Provider>
    );
};

export default AuthProvider;