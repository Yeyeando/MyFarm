// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH3GAl5Gg_xMCrLNxPhjdnXxqmcBTc_J4",
  authDomain: "farm-6c524.firebaseapp.com",
  databaseURL: "https://farm-6c524-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "farm-6c524",
  storageBucket: "farm-6c524.appspot.com",
  messagingSenderId: "364393732478",
  appId: "1:364393732478:web:c56e0c8e428fd921243b2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export default db;