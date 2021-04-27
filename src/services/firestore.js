import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBEm6u5l44iELTgKbhKf0eMo78LX7lTiz4",
    authDomain: "stockitems-33140.firebaseapp.com",
    projectId: "stockitems-33140",
    storageBucket: "stockitems-33140.appspot.com",
    messagingSenderId: "862817573668",
    appId: "1:862817573668:web:f7880f72cd01791dc671b1"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth;