// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUxA5NwXlawAfEvfkqv84zop2LwLXmJsw",
  authDomain: "react-app-7e7d0.firebaseapp.com",
  databaseURL: "https://react-app-7e7d0-default-rtdb.firebaseio.com",
  projectId: "react-app-7e7d0",
  storageBucket: "react-app-7e7d0.firebasestorage.app",
  messagingSenderId: "742582751143",
  appId: "1:742582751143:web:6744cabaeef7b62ba77082"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;