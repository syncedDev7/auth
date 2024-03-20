// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCb0z3oqjnMthxQ2SEEqAdGUyd3UiLH3cU",
  authDomain: "auth-covid-a7112.firebaseapp.com",
  projectId: "auth-covid-a7112",
  storageBucket: "auth-covid-a7112.appspot.com",
  messagingSenderId: "41160053824",
  appId: "1:41160053824:web:c31625b1905c66a744bba5",
  measurementId: "G-303CN8EMR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  const Auth = getAuth() 

export default app