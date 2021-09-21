import { initializeApp } from "@firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/compat/firestore";
import "firebase/compat/analytics";




const config = {
apiKey: "AIzaSyBZ9p3WwblXS9k0le4O185dbnXVry8R25Y",
authDomain: "crwn-db-e92ec.firebaseapp.com",
projectId: "crwn-db-e92ec",
storageBucket: "crwn-db-e92ec.appspot.com",
messagingSenderId: "1034331420385",
appId: "1:1034331420385:web:1f7a853cbd4dbe47e229a0",
measurementId: "G-PSZM42V6RG"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

   const userRef = firebase.firestore().doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();


    if (!snapshot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date()

        try{
            await userRef.set({
                displayName, 
                email,
                createdAt,
                ...additionalData
            })
        } catch (error){
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};


firebase.initializeApp(config);
 
export const auth = getAuth();
export const firestore = getFirestore();
 
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
 
export const signInWithGoogle = () => signInWithPopup(auth, provider).catch(()=>{})
 
export default firebase;