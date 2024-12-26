// import React, { useState } from "react";
// import "./Signup.css"
// import { useNavigate } from "react-router-dom";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { app } from "./firebase";
// const Login = () => {
//   const nav = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const [sign, setsign] = useState("sign");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const auth = getAuth(app);
//     signInWithEmailAndPassword(auth, email, password)
//       .then((res) => {
//         console.log(res.user);

//         nav("/");
//       })
//       .catch((err) => {
//        alert(err);
//       });
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-form">
//         <h2>Login</h2>
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
//             Login
//           </button>
//           <p
//             style={{ cursor: "pointer", color: "blue", marginTop: "10px" }}
//             onClick={() => nav("/Signup")}
//           >
//             Create account...
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast from react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import "./Login.css"; // Link to external CSS file for styling

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


     const auth = getAuth();
   
     useEffect(() => {
       
         if (localStorage.getItem("isAuthenticated")) {
           // If no user is signed in, redirect to the signup page
           navigate("/");
         }
       },[]);
   
    ;
   
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
          Don't have an account? <a href="/Signup">Sign Up</a>
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
