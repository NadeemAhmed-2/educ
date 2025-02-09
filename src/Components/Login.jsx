import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "./firebase";
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast from react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import "./Login.css"; // Link to external CSS file for styling

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('user')) {
      navigate("/");
    }
  },[]);
  const handleLogin = async () => {
    if(email === "" || password === "")
    {
      return toast.error("All field are required!")
    } 
    const users = await signInWithEmailAndPassword(auth, email, password)
  //  .then((res)=>{
 
  //  })
  //  .catch(err => {
  //    alert("Invalid email or password!")
  //  })

    localStorage.setItem("user", users.user.email);

    toast.success("Successfully logged in!");
    setTimeout(() => {
      navigate("/");
    }, [200]);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <input
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
        <input
        required
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
          Don't have an account? <Link to="/Signup">Sign Up</Link>
        </p>
      </div>
      {/* ToastContainer is used to display the toast notifications */}
      {/* <ToastContainer
        position="top-right"
        autoClose={3000} // Toast will auto-close after 3 seconds
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
    </div>
  );
};

export default Login;

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       const user = userCredential.user;
//       localStorage.setItem("user", JSON.stringify({ email: user.email }));
//       toast.success("Login successful!");
//       navigate("/");
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// };
// export default Login;

// import React from "react";
// // import "./Login.css";

// import { useState } from "react";
// import { login, signUp } from "./firebase";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [SignUp, setSignUp] = useState("Sign Up");
//   const [loading, setLoading] = useState(false);

//   const user_auth = async (event) => {
//     event.preventdefault;
//     setLoading(true);
//     if (SignUp === "Sign Up") await signUp(name, email, password);
//     else await login(email, password);
//     setLoading(false);
//   };
//   const nav = useNavigate();
//   const handleBtn = () => {
//     if (SignUp === "Sign Up") setSignUp("Sign In");
//     else setSignUp("Sign Up");
//   };
//   return loading ? (
//     <>
//       {" "}
//       <h1>Loading....</h1>
//       nav("/")
//     </>
//   ) : (
//     <>
//       <div className="login">
//         {/* <img src={logo} alt="" className="logo" /> */}

//         <div
//           className="login-pag
//        e"
//         >
//           <h3>{SignUp}</h3>
//           {SignUp === "Sign Up" ? (
//             <input
//               type="text"
//               value={name}
//               placeholder="Your name"
//               onChange={(e) => {
//                 setName(e.target.value);
//               }}
//             />
//           ) : null}
//           <br />
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//           />
//           <br />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => {
//               setPassword(e.target.value);
//             }}
//           />
//           <br />
//           <button onClick={user_auth} type="submit" className="sign-btn">
//             {SignUp}{" "}
//           </button>
//           <div className="outer">
//             {SignUp !== "Sign Up" ? (
//               <p>
//                 New to Netflix ? <span onClick={handleBtn}>Sign up Now</span>
//               </p>
//             ) : null}
//             {SignUp === "Sign Up" ? (
//               <p>
//                 Already have an account?{" "}
//                 <span onClick={handleBtn}>Sign In Now</span>
//               </p>
//             ) : null}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;
