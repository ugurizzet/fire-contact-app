// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCetQ-dX0XcRmcYLCefUGkc6k5FCWTgaAA",
  authDomain: "fire-contact-a7f93.firebaseapp.com",
  databaseURL: "https://fire-contact-a7f93-default-rtdb.firebaseio.com",
  projectId: "fire-contact-a7f93",
  storageBucket: "fire-contact-a7f93.appspot.com",
  messagingSenderId: "1040133391281",
  appId: "1:1040133391281:web:f74d02a6488898cd403390"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;