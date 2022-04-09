import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth"
import { useEffect, useState } from "react"
import { auth } from "../components/firebase.init"

const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
    const [user, setUser] = useState({})
    
    const signWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
                console.log(user);
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handleSingOut = () => {
        signOut(auth)
            .then(() => {
            
        })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    },[])
    return { user, signWithGoogle, handleSingOut };
}
export default useFirebase;