import PropTypes from 'prop-types';
import { createContext, useEffect, useReducer } from 'react';

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

import accountReducer from '../store/';
import { LOGIN, LOGOUT } from 'store/actions';

const FirebaseContext = createContext(null);

// const

const initialState = {
    isLoggedIn: false,
    isInitialized: false,
    user: null
}


export const FirebaseProvider = ({ children }) => {
    const [state, dispatch] = useReducer(accountReducer, initialState);

    useEffect(
        () => {

            firebase.auth().onAuthStateChanged((user) => {
                if (user) {

                    dispatch({
                        type: LOGIN,
                        payload: {
                            isLoggedIn: true,
                            user: {
                                id: user.uid,
                                email: user.email,
                                name: user.displayName
                            }
                        }
                    })
                } else {
                    dispatch({
                        type: LOGOUT
                    })
                }
            })


        }, [dispatch]
    )

    const firebaseEmailPasswordSignIn = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

    const firebaseGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        return firebase.auth().signInWithPopup(provider);
    };

    const firebaseRegister = async (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);

    const logout = () => firebase.auth().signOut();

    return <FirebaseContext.Provider
        value={{
            ...state,
            firebaseRegister,
            firebaseEmailPasswordSignIn,
            login: () => { },
            firebaseGoogleSignIn,
            logout
        }}
    >
        {children}
    </FirebaseContext.Provider>

}
