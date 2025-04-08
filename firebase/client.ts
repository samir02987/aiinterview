
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWg4zgxySZ-D99K9_uNPAzuFR8yRx52EM",
  authDomain: "prepwise-9eed3.firebaseapp.com",
  projectId: "prepwise-9eed3",
  storageBucket: "prepwise-9eed3.firebasestorage.app",
  messagingSenderId: "416257970267",
  appId: "1:416257970267:web:6e7bfcf0dc872a8a89ef7e",
  measurementId: "G-DJ70D84QZC"
};

const app = !getApps.length ? initializeApp(firebaseConfig) :getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);