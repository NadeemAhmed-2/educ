// import React, { useState } from "react";
// import { app } from "./firebase";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import "./Signup.css";
// import { useNavigate } from "react-router-dom";
// const SignupPage = () => {
//   const nav = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const [sign, setsign] = useState("sign");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const auth = getAuth(app);
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((res) => {
//         console.log(res);

//         nav("/");
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-form">
//         <h2>Create an Account</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               required
//             />
//           </div>

//           <div className="input-group">
//             <label htmlFor="username">Username</label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Choose a username"
//               required
//             />
//           </div>

//           <div className="input-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               required
//             />
//           </div>

//           <button type="submit" className="signup-btn">
//             Sign Up
//           </button>
//           <p
//             style={{ cursor: "pointer", color: "blue", marginTop: "10px" }}
//             onClick={() => nav("/Login")}
//           >
//             Already have an account?
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { getAuth } from "firebase/auth";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
// import "react-toastify/dist/ReactToastify.css"; // Import toast styles
// import "./Signup.css"; // Link to external CSS file for styling

// const SignupPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//       const auth = getAuth();

//       useEffect(() => {

//           if (!localStorage.getItem("isAuthenticated")) {
//             // If no user is signed in, redirect to the signup page
//             navigate("/");
//           }
//         },[]);

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       toast.success("Signup successful!");
//       localStorage.setItem("isAuthenticated",true);// Success toast notification
//       navigate("/"); // Redirect to main page
//     } catch (error) {
//       toast.error(`Error: ${error.message}`); // Error toast notification
//     }
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-box">
//         <h2>Signup</h2>
//         <form onSubmit={handleSignup}>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="input-field"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="input-field"
//             required
//           />
//           <button className="signup-btn" type="submit">
//             Signup
//           </button>
//         </form>
//         <p className="login-link">
//           Already have an account? <a href="/Login">Login</a>
//         </p>
//       </div>
//       {/* ToastContainer to render the notifications */}
//       <ToastContainer
//         position="top-right"
//         autoClose={3000} // Auto-close after 3 seconds
//         hideProgressBar
//         newestOnTop
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//       />
//     </div>
//   );
// };

// export default SignupPage;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
          Already have an account? <Link to="/Login">Login</Link>
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
