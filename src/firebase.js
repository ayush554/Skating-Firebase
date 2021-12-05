// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLMzQxH_hITMXKyD4ATc8umeFJi6xQZ0c",
  authDomain: "skating-50ecf.firebaseapp.com",
  databaseURL: "https://skating-50ecf.firebasio.com",
  projectId: "skating-50ecf",
  storageBucket: "skating-50ecf.appspot.com",
  messagingSenderId: "613283859586",
  appId: "1:613283859586:web:9b30388ccf0f64cf50789b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };