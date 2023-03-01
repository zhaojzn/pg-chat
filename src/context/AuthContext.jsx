import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useState, useEffect, createContext} from "react";


export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
    const [currentUser,setCurrentUser] = useState({})

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            console.log("Current logged user:" + user.displayName)
            console.log("Email:" + user.email)
            console.log("Photo:" + user.photoURL)
            console.log("UID:" + user.uid)
        })
    },[]);

    return(
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    );
}