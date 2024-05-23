import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkAuthState() {
  const { data, error } = await supabase.auth.getSession();
  if (error) {
    console.error("Error fetching session:", error);
  } else if (data.session) {
      console.log("User is signed in:", data.session.user);
    } else {
      console.log("No user is signed in");
    }
}

checkAuthState();

// supabase.auth.onAuthStateChange((event, session) => {
//   if (event === 'SIGNED_IN' || event === 'SIGNED_UP') {
//     console.log('User signed in:', session.user);
//     window.location.href = "/dashboard/home.html";
//   } else if (event === 'SIGNED_OUT') {
//     console.log('User signed out');
//     window.location.href = "/login.html";
//   }
// });


export default supabase;
