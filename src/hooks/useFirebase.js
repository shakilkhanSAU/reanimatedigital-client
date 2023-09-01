import { GoogleAuthProvider, getAuth, getIdToken, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useEffect, useState } from "react";




const useFirebase = () => {

    const googlePovider = new GoogleAuthProvider();
    const auth = getAuth(app);


    // user state
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [admin, setAdmin] = useState(false);

    // singin with google
    const signInWithGoogle = () => {
        signInWithPopup(auth, googlePovider)
            .then((result) => {
                setUser(result.user);
            }).catch((error) => {
                console.log(error.message);
            });
    }


    // user observer or manageUser
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                        // setToken(idToken)
                    })
            } else {
                setUser({})
                // setOpen(false)
            }
            setIsLoading(false)

        });
        return () => unsubscribe;
    }, [auth]);

    return (
        {
            user,
            signInWithGoogle
        }
    );
};

export default useFirebase;