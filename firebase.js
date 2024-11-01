// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV5C-RciYcQKAf8Eg2RetLkt8eKe3ViRg",
  authDomain: "pwip-2.firebaseapp.com",
  projectId: "pwip-2",
  storageBucket: "pwip-2.firebasestorage.app",
  messagingSenderId: "1070981438807",
  appId: "1:1070981438807:web:1005463159cf49cbef7212"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };