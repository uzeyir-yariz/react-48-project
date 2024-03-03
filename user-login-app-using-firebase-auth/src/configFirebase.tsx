import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDDfnAA5rfsQg0golnRmKLg6ktDrhOhlOM",
    authDomain: "auth-react-tsx.firebaseapp.com",
    databaseURL: "https://auth-react-tsx-default-rtdb.firebaseio.com",
    projectId: "auth-react-tsx",
    storageBucket: "auth-react-tsx.appspot.com",
    messagingSenderId: "310393480677",
    appId: "1:310393480677:web:def3c4a310fcce56c53b0c",
    measurementId: "G-NRL29QZS1V"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);