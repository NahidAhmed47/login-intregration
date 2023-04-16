// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhLg-DZtFvmLzJLEYkNxBZiQ6lkEPvdBU",
  authDomain: "login-intregration.firebaseapp.com",
  projectId: "login-intregration",
  storageBucket: "login-intregration.appspot.com",
  messagingSenderId: "49443684904",
  appId: "1:49443684904:web:090d37d9d51aad62a5eb1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;