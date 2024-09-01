// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import conf from "../conf/conf";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: conf.firebaseApi,
  authDomain: "real-estate-17b3a.firebaseapp.com",
  projectId: "real-estate-17b3a",
  storageBucket: "real-estate-17b3a.appspot.com",
  messagingSenderId: "862125584720",
  appId: "1:862125584720:web:c0f7ea16bc4023ba6a7c55"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
