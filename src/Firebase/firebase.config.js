// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQ15RDE3tHWtkUX40ZFBQQZYpLqYnEmC8",
    authDomain: "assignment-9-8aa9a.firebaseapp.com",
    projectId: "assignment-9-8aa9a",
    storageBucket: "assignment-9-8aa9a.appspot.com",  // Fixed the storage bucket URL
    messagingSenderId: "788471332503",
    appId: "1:788471332503:web:8be98a9030ec749aaef3d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Corrected this line
const googleProvider = new GoogleAuthProvider(); // Corrected placement
export { auth, googleProvider };
