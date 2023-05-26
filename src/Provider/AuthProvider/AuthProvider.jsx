import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth , signInWithPopup } from "firebase/auth";
import app from '../../Firebase/firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const auth = getAuth(app);

    function createUser(email,password){
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function signInpopUp(provider){
        return signInWithPopup(auth, provider)
    }

    const authInfo = {
        user : 'Khan zia',
        signInpopUp,
        createUser
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