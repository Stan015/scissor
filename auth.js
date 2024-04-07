// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
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
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("user logged in:", user.email)
  } else {
    console.log("user signed out");
  }
});

// // sign up new user
// const signUpForm = document.querySelector("#sign_up_form");

// signUpForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const username = signUpForm.querySelector("#user_name").value;
//   const email = signUpForm.querySelector("#signup-email").value;
//   const password = signUpForm.querySelector("#signup-password").value;

//   console.log(username);

//   createUserWithEmailAndPassword(auth, email, password)
//     // .then((userCredential) => {
//     //   const user = userCredential.user;
//     //   console.log(user);
//     // })
//     .catch((error) => {
//       console.log(error);
//     });
// });

// login existing user
const loginForm = document.querySelector("#login_form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = loginForm.querySelector("#login-email").value;
  const password = loginForm.querySelector("#login-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      window.location.href = "index.html";

      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    });
});

// logout user
const logoutBtn = document.querySelector(".logout");

  logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();

    signOut(auth)
    // .then(() => {
    //   console.log("user signed out");
    // });
  });
