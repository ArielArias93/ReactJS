import firebase from "firebase/App";
import firestore from "firebase/firestore";
import "firebase/storage";
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyA1kp3H509mwGplADC_qx2-np7pYM2bP3o",
  authDomain: "twitterclone-683ee.firebaseapp.com",
  projectId: "twitterclone-683ee",
  storageBucket: "twitterclone-683ee.appspot.com",
  messagingSenderId: "564290285222",
  appId: "1:564290285222:web:d2531c695092a4de2b4e67",
  measurementId: "G-6LPMCT5PQJ"
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore()

const storage = firebase.storage()

export {storage, firebase as default}