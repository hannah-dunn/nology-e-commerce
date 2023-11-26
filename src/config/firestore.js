// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const apiKey = import.meta.env.VITE_FIRESTORE_API;
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "hannah-e-shop-nology.firebaseapp.com",
  projectId: "hannah-e-shop-nology",
  storageBucket: "hannah-e-shop-nology.appspot.com",
  messagingSenderId: "420452913763",
  appId: "1:420452913763:web:8d8524f9c8b44876049e56",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
