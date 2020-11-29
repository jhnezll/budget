import { Provider } from 'next-auth/client'
import '../styles/index.css';
import {useEffect, useState} from "react";
import fb from "../util/firebase-config";
import SessionContext from "../util/SessionContext";


function MyApp({Component, pageProps}) {

    const [sessionLoaded, toggleSessionLoaded] = useState(false)
    const [isAuthenticated, toggleAuthenticated] = useState(false)
    const [userProfile, setUserProfile] = useState({})

    useEffect(() => {
        fb.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                setUserProfile(user)
                toggleAuthenticated(true)
                toggleSessionLoaded(true)
            } else {
                // User is signed out.
                toggleAuthenticated(false)
                setUserProfile({})
                toggleSessionLoaded(true)
            }
        });
    }, [])

    if (!sessionLoaded) {
        return null
    }

    return (
        <SessionContext.Provider value={{isAuthenticated}}>
            <Provider session={pageProps.session}>
                <Component {...pageProps} />
            </Provider>
        </SessionContext.Provider>
    )

}

export default MyApp
