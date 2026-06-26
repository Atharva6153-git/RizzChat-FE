// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf2yp5gQBAQ7T2iHPMl8fWTAFL8Zeqmz4",
  authDomain: "auth-16-07-06.firebaseapp.com",
  projectId: "auth-16-07-06",
  storageBucket: "auth-16-07-06.firebasestorage.app",
  messagingSenderId: "963308666795",
  appId: "1:963308666795:web:f52ad8544c0d2e2abd1cee",
  measurementId: "G-9Z4ND66CHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




export default app;