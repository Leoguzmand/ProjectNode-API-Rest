// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfEsu-Un9cXtj_Mphorz5BksnnKXuxYnU",
  authDomain: "node-api-rest-4be94.firebaseapp.com",
  projectId: "node-api-rest-4be94",
  storageBucket: "node-api-rest-4be94.firebasestorage.app",
  messagingSenderId: "1073393252807",
  appId: "1:1073393252807:web:dfe3a5bf022ae90be141e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (base de datos)
const db = getFirestore(app);

export { db };
