// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBti-6_tIlPW-TZYxRhylxJ9Ob_KwQkIU8",
  authDomain: "pwip-3902a.firebaseapp.com",
  projectId: "pwip-3902a",
  storageBucket: "pwip-3902a.appspot.com",
  messagingSenderId: "1049882314688",
  appId: "1:1049882314688:web:dad884e1b31cafd9baaa25"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };