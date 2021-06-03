import firebase from "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCd3NbZtpAT8fHVr_wIfSKWewv3iSClQrs",
    authDomain: "reactchat-6722f.firebaseapp.com",
    projectId: "reactchat-6722f",
    storageBucket: "reactchat-6722f.appspot.com",
    messagingSenderId: "890981025221",
    appId: "1:890981025221:web:210345df06c6138c99f7ac",
    measurementId: "G-2KDT28YQ73"
}).auth();