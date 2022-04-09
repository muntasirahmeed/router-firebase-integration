// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCky3pAd9-yWDlNhABOQxNG7Amnob3TtNA",
  authDomain: "router-firebase-integrat-9d231.firebaseapp.com",
  projectId: "router-firebase-integrat-9d231",
  storageBucket: "router-firebase-integrat-9d231.appspot.com",
  messagingSenderId: "104289703304",
  appId: "1:104289703304:web:e7f1d1b75b893b8220d63d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
export default app;