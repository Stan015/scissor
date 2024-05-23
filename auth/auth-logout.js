import supabase from "./auth";

// logout user
const logoutBtns = document.querySelectorAll(".logout");

logoutBtns.forEach((logoutBtn) => {
  logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();

    (async function signOut() {
      const { error } = await supabase.auth.signOut();

      if (error) {
        console.error(error)
      } else {
        console.log("signed out successfully");
        window.location.href = "/login.html";
      }
    })();
  });
});
//
