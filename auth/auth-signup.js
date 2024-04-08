import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { firebaseConfig } from "./auth";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// sign up new user
const signUpForm = document.querySelector("#sign_up_form");

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullName = signUpForm.querySelector("#full-name").value;
  const email = signUpForm.querySelector("#signup-email").value;
  const password = signUpForm.querySelector("#signup-password").value;

  console.log(fullName);

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);

      window.location.href = "index.html";
    })
    .catch((error) => {
      console.log(error);
    });
});

// sign up new user with google popup
const googleSignUpBtn = signUpForm.querySelector(".google");


googleSignUpBtn.addEventListener("click", () => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user);

    window.location.href = "index.html";

  });
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     const email = error.customData.email;
  //     const credential = GoogleAuthProvider.credentialFromError(error);
  //     // ...
  //   });
});

// sign up with twitter 
const facebookSignUpBtn = signUpForm.querySelector(".facebook");

facebookSignUpBtn.addEventListener('click', () => {
    const provider = new FacebookAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const secret = credential.secret;
        const user = result.user;
  
        // console.log(user, secret, token)
        window.location.href = "index.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
  
        console.log(errorCode, errorMessage);
        //   const email = error.customData.email;
        //   const credential = TwitterAuthProvider.credentialFromError(error);
      });
})
//