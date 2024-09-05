// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from"firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUlH7f6eeniIb3k76fyzKwYC8avKfjqvY",
  authDomain: "fir-4c173.firebaseapp.com",
  projectId: "fir-4c173",
  storageBucket: "fir-4c173.appspot.com",
  messagingSenderId: "1008225564518",
  appId: "1:1008225564518:web:0b614398b2706983f3baa7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const firestore = getFirestore(app)
export {auth, firestore};




















