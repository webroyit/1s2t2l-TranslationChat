import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyBGCpXBFvnNWOMoDbdA_uxRbmJGqGD3824",
  authDomain: "translationchat-f34ba.firebaseapp.com",
  projectId: "translationchat-f34ba",
  storageBucket: "translationchat-f34ba.appspot.com",
  messagingSenderId: "895213662267",
  appId: "1:895213662267:web:a7159eb873ac8b03a5ac1e"
};

// Check if the firebase is initialized to prevent duplicates
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };