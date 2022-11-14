// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDty6XuZmscuv2XWH_SCSHSb1B2Ar6Jp8g",
  authDomain: "fir-contact-project-7cd96.firebaseapp.com",
  databaseURL: "https://fir-contact-project-7cd96-default-rtdb.firebaseio.com",
  projectId: "fir-contact-project-7cd96",
  storageBucket: "fir-contact-project-7cd96.appspot.com",
  messagingSenderId: "750149450981",
  appId: "1:750149450981:web:1a838df9f0dc8af73b280c",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;
