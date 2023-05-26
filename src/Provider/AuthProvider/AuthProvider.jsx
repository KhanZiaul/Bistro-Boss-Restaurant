import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth , onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const auth = getAuth(app);

    function createUser(email,password){
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function signInUser(email,password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut(){
        return signOut(auth)
    }

    function signInpopUp(provider){
        return signInWithPopup(auth, provider)
    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          // ...
        } else {
          // User is signed out
          // ...
        }
      });

    const authInfo = {
        user : 'Khan zia',
        signInpopUp,
        createUser,
        signInUser,
        logOut
    }

    

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;