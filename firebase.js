import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAijypdGp7vVB2dPXn0K4-9UPwI4UYkvwY",
  authDomain: "event-planners-d1e07.firebaseapp.com",
  projectId: "event-planners-d1e07",
  storageBucket: "event-planners-d1e07.firebasestorage.app",
  messagingSenderId: "60113668174",
  appId: "1:60113668174:web:c5a14a99fc4d4fb0ca5b1f",
  measurementId: "G-M9N6KZCTLT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, analytics, auth, googleProvider, signInWithPopup };
