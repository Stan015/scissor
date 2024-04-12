import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { firebaseConfig } from "./auth";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// logout user
const logoutBtns = document.querySelectorAll(".logout");

logoutBtns.forEach(logoutBtn => {
  logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();
  
    signOut(auth);
  
    window.location.href = "../index.html";
  });
})
//
