// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDUyxOcW-qb4vWLK7TUlyY1pExaHRnM5aE",
  authDomain: "project-scissor.firebaseapp.com",
  projectId: "project-scissor",
  storageBucket: "project-scissor.appspot.com",
  messagingSenderId: "160465875577",
  appId: "1:160465875577:web:007b18d3429e0c349bdaa8",
  measurementId: "G-8VLJ958LRR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("user logged in:", user.email)
  } else {
    console.log("user signed out");
  }
});
