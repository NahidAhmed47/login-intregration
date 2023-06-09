import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, updateCurrentUser } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const userRegistration = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password);
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return()=>{
            unSubscribe();
        }
    },[])
    const logOut = () =>{
        signOut(auth)
        .then(()=>{

        })
        .catch(error =>{
            console.log(error);
        })
    }
    const useInfo = {
        user, 
        loading,
        userRegistration,
        logOut
    }
    return (
        <AuthContext.Provider value={useInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;