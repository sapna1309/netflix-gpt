// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA98lTMqWfNVJrgO8TKCsAkyS76XdDruSs",
  authDomain: "netflix-gpt-2900a.firebaseapp.com",
  projectId: "netflix-gpt-2900a",
  storageBucket: "netflix-gpt-2900a.appspot.com",
  messagingSenderId: "250752643129",
  appId: "1:250752643129:web:2f931dad4e02c740ae1de8",
  measurementId: "G-TZMF0R24WJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();