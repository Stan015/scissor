import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  FacebookAuthProvider,
} from "firebase/auth";
import { firebaseConfig } from "./auth";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// login existing user
const loginForm = document.querySelector("#login_form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = loginForm.querySelector("#login-email").value;
  const password = loginForm.querySelector("#login-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      window.location.href = "../dashboard/home.html";

      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    });
});
//

// login with google account popup
const googleLoginBtn = loginForm.querySelector(".google");

googleLoginBtn.addEventListener("click", () => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(user);

      window.location.href = "../dashboard/home.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;

      console.log(errorCode, errorMessage, email);
      //   const credential = GoogleAuthProvider.credentialFromError(error);
    });
});
//

// login with facebook
const facebookLoginBtn = loginForm.querySelector(".facebook");

facebookLoginBtn.addEventListener("click", () => {
  const provider = new FacebookAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const secret = credential.secret;
      const user = result.user;

      window.location.href = "../dashboard/home.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode, errorMessage);
      //   const email = error.customData.email;
      //   const credential = TwitterAuthProvider.credentialFromError(error);
    });
});
//

// // login with google redirect
// googleLoginBtn.addEventListener('click', () => {
//   const provider = new GoogleAuthProvider();

//     signInWithRedirect(auth, provider);

//     getRedirectResult(auth)
//     .then((result) => {
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;

//       const user = result.user;

//       window.location.href = "index.html";
//     })
//     // .catch((error) => {
//     //   const errorCode = error.code;
//     //   const errorMessage = error.message;
//     //   const email = error.customData.email;
//     //   const credential = GoogleAuthProvider.      credentialFromError(error);
//     // });
// })
