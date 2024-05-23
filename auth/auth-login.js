import supabase from "./auth";

// login existing user
const loginForm = document.querySelector("#login_form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = loginForm.querySelector("#login-email").value;
  const password = loginForm.querySelector("#login-password").value;

  (async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    // if (error) {
    //   console.error('Error signing in:', error);
    // } else if (data) {
    //   console.log('Signed in successfully:', data);
    //   window.location.href = "../dashboard/home.html";
    // }
  })();
});
//

// login with google account popup
const googleLoginBtn = loginForm.querySelector(".google");

googleLoginBtn.addEventListener("click", () => {
  (async function signInWithPopup() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    // if (error) {
    //   console.error('Error signing in:', error);
    // } else if (data) {
    //   console.log('Signed in successfully:', data);
    //   window.location.href = "../dashboard/home.html";
    // }
  })();
});
//

// login with facebook
const facebookLoginBtn = loginForm.querySelector(".facebook");

facebookLoginBtn.addEventListener("click", () => {
  (async function signInWithPopup() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "facebook",
    });

    // if (error) {
    //   console.error("Error signing in:", error);
    // } else {
    //   console.log("Signed in successfully:", data);
    //   window.location.href = "../dashboard/home.html";
    // }
  })();
});
//
