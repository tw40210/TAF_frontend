// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeGGBpinpAiawoBwPaade7iLaxd3KYC5s",
  authDomain: "the-aegis-forge-fe.firebaseapp.com",
  projectId: "the-aegis-forge-fe",
  storageBucket: "the-aegis-forge-fe.firebasestorage.app",
  messagingSenderId: "1069386171859",
  appId: "1:1069386171859:web:34a1b5b20e3b33c09a9b26",
  measurementId: "G-2R8QK0GNMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = getAuth(app)



export { app, auth };