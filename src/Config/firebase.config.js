// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDwAss7L5Y7MyCBwq4O1MzE5w7GWUEwQ_o",
    authDomain: "jobtex-projecs.firebaseapp.com",
    projectId: "jobtex-projecs",
    storageBucket: "jobtex-projecs.appspot.com",
    messagingSenderId: "841398451540",
    appId: "1:841398451540:web:3ee2a212f27bc8717d5cc1",
    measurementId: "G-N8H6KVJQG6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)

export default auth;