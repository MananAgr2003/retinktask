// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1ipU34Q6s_FeUDD4FpyVi5usfPv9c72Y",
  authDomain: "retinktask.firebaseapp.com",
  projectId: "retinktask",
  storageBucket: "retinktask.appspot.com",
  messagingSenderId: "102694963147",
  appId: "1:102694963147:web:337e92a316f4618789d84e",
  measurementId: "G-QWDDPZWRBQ"
};

// Initialize Firebase


const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();