import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { auth, googleProvider, signInWithPopup, db } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

const RegisterPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const defaultEmail = location.state?.email || "";
  const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState(defaultEmail);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      if (result.user) {
        // Don't await setDoc because if Firestore isn't created in the console, it might hang indefinitely and block navigation
        setDoc(doc(db, "users", result.user.uid), {
          email: result.user.email,
          createdAt: new Date().toISOString(),
          role: "user"
        }).catch(dbError => {
          console.error("Error creating user document in Firestore:", dbError);
        });
        
        navigate(from, { replace: true });
      }
    } catch (err) {
      console.error(err);
      if (err.code === "auth/email-already-in-use") {
        setError("An account already exists with this email.");
      } else if (err.code === "auth/weak-password") {
        setError("Password should be at least 6 characters.");
      } else {
        setError("Failed to create an account: " + err.message);
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      if (result.user) {
        try {
          // Check if user document already exists
          const userDocRef = doc(db, "users", result.user.uid);
          const userDocSnap = await getDoc(userDocRef);
          
          if (!userDocSnap.exists()) {
            // If it doesn't exist, create it (new account)
            setDoc(userDocRef, {
              email: result.user.email,
              createdAt: new Date().toISOString(),
              role: "user"
            }).catch(e => console.error(e));
          }
        } catch (dbError) {
          console.error("Firestore Error during Google Login:", dbError);
        }
        
        navigate(from, { replace: true });
      }
    } catch (err) {
      console.error(err);
      setError("Failed to login with Google: " + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute top-0 left-0 w-96 h-96 bg-mauve/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-plum/10 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-md p-8 glass rounded-soft shadow-twilight animate-fade-in mx-4 my-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-serif text-mist mb-2 tracking-wide">
            Create Account
          </h1>
          <p className="text-mauve text-sm mb-2">
            Join Elyza Events to manage your bookings
          </p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-200 text-sm p-3 rounded-md mb-6 text-center">
            {error}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleRegister}>
          <div className="space-y-2">
            <label className="text-mist/80 text-sm font-medium tracking-wide">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-navy/40 border border-mauve/20 rounded-refined px-4 py-3 text-mist placeholder:text-mist/30 focus:border-mauve transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="text-mist/80 text-sm font-medium tracking-wide">
              PASSWORD
            </label>
            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-navy/40 border border-mauve/20 rounded-refined px-4 py-3 text-mist placeholder:text-mist/30 focus:border-mauve transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="text-mist/80 text-sm font-medium tracking-wide">
              CONFIRM PASSWORD
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full bg-navy/40 border border-mauve/20 rounded-refined px-4 py-3 text-mist placeholder:text-mist/30 focus:border-mauve transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-plum text-mist rounded-refined font-medium hover:bg-plum/90 transition-all shadow-soft"
          >
            CREATE ACCOUNT
          </button>
        </form>

        <div className="mt-8 separator text-center text-sm text-mist/60">
          <span className="bg-navy px-2 relative z-10">OR</span>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full mt-6 py-3 flex items-center justify-center space-x-2 bg-mist text-navy rounded-refined font-medium hover:bg-mist/90 transition-all shadow-soft group"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span>Continue with Google</span>
        </button>

        <p className="mt-8 text-center text-sm text-mist/60">
          Already have an account?{" "}
          <Link to="/login" className="text-plum hover:text-mist transition-colors font-bold">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
