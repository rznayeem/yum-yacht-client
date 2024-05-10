// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.meta.env.VITE_APIKEY,
  authDomain: process.meta.env.VITE_AUTHDOMAIN,
  projectId: process.meta.env.VITE_PROJECTID,
  storageBucket: process.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: process.meta.env.VITE_MESSAGINGSENDERID,
  appId: process.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
