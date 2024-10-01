import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const updateUser = (displayName, photo_url) => {
        updateProfile(auth.currentUser, {
            displayName: displayName, photoURL: photo_url
        })
        .then(() => console.log('uploaded display name and photo_url'))
        .catch(error => {
                console.error(error)
            })
    } 
    
    useEffect(() => {
        const onsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => onsubscribe();
    },[])

    const authInfo = { user, loading, createUser, signIn, logOut, updateUser }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;