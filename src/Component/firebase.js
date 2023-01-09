import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsdQCQ-msiK2E4IzmfEj0aT4mfaOD6kXg",
  authDomain: "clone-7b0e2.firebaseapp.com",
  projectId: "clone-7b0e2",
  storageBucket: "clone-7b0e2.appspot.com",
  messagingSenderId: "969555971039",
  appId: "1:969555971039:web:b987fe7eccbff48b95126a",
  measurementId: "G-E7NZELTYVQ",
};


// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();

// The latest update for auth with db
const auth = firebase.auth();
export default auth;
