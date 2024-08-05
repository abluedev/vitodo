// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "awesome-aeb2b.firebaseapp.com",
    projectId: "awesome-aeb2b",
    storageBucket: "awesome-aeb2b.appspot.com",
    messagingSenderId: "1039410068092",
    appId: "1:1039410068092:web:8c17e06943587e7222a7f9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
