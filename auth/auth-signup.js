import supabase from "./auth";

// sign up new user
const signUpForm = document.querySelector("#sign_up_form");

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullName = signUpForm.querySelector("#full-name").value;
  const email = signUpForm.querySelector("#signup-email").value;
  const password = signUpForm.querySelector("#signup-password").value;

  console.log(fullName);

  (async function signUpNewUser() {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    // if (error) {
    //   console.error('Error signing up:', error);
    // } else {
    //   console.log('Signed up successfully:', data);
    //   window.location.href = "../dashboard/home.html";
    // }
  })();
});

// sign up new user with google popup
const googleSignUpBtn = signUpForm.querySelector(".google");

googleSignUpBtn.addEventListener("click", () => {
  (async function signInWithPopup() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    // if (error) {
    //   console.error('Error signing up:', error);
    // } else if (data) {
    //   console.log('Signed up successfully:', data);
    //   window.location.href = "../dashboard/home.html";
    // }
  })();
});

// sign up with facebook
const facebookSignUpBtn = signUpForm.querySelector(".facebook");

facebookSignUpBtn.addEventListener("click", () => {
  (async function signInWithPopup() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "facebook",
    });

    // if (error) {
    //   console.error('Error signing up:', error);
    // } else if (data) {
    //   console.log('Signed up successfully:', data);
    //   window.location.href = "../dashboard/home.html";
    // }
  })();
});
//
