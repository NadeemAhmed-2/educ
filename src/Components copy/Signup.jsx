import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import "./Signup.css"; // Link to external CSS file for styling

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Signup successful!"); // Success toast notification
      navigate("/"); // Redirect to main page
    } catch (error) {
      toast.error(`Error: ${error.message}`); // Error toast notification
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            required
          />
          <button className="signup-btn" type="submit">
            Signup
          </button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
      {/* ToastContainer to render the notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000} // Auto-close after 3 seconds
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Signup;
