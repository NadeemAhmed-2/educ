
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast from react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import "./Login.css"; // Link to external CSS file for styling

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        localStorage.setItem("isAuthenticated", true); // Set auth flag
        toast.success("Successfully logged in!"); // Success toast notification
        navigate("/"); // Redirect to main page
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`); // Error toast notification
      });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
      {/* ToastContainer is used to display the toast notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000} // Toast will auto-close after 3 seconds
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

export default Login;
