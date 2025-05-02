

import { supabase } from "@/src/utils/supabase/client";


export const useAuthGoogle = () => {
    const signInWithGoogle = async () => {
      try {
        const { error } = await supabase.auth.signInWithOAuth({
          provider: "google",
        });
  
        if (error) {
          console.error("Google sign-in error:", error.message);
        } else {
          console.log("Redirecting to Google...");
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      }
    };
  
    return { signInWithGoogle };
  };