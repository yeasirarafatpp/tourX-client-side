import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initFirebaseApp from "../firebase/firebase.init";

initFirebaseApp();

const useFirebase = () => {
    const [tours, setTours] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => setTours(result.user))
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

            })
    };
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setTours({});
            });
    };
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setTours(tours)
            }
        });
    }, []);
    return {
        tours,
        signInUsingGoogle,
        logOut
    }
}
export default useFirebase;