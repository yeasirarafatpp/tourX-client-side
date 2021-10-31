import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initFirebaseApp from "../firebase/firebase.init";
import { useHistory, useLocation } from "react-router-dom";

initFirebaseApp();


const useFirebase = () => {
    const history = useHistory();
    const location = useLocation();
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const { from } = location.state || { from: { pathname: '/' } }
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                history.replace(from);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
    };
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            });
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        });
        return unsubscribe;
    }, []);
    return {
        user,
        signInUsingGoogle,
        logOut
    }
}
export default useFirebase;