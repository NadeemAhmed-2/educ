import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import CardInner from "./Components/CardInner/CardInner";
import Home from "./Components/Home/Home";
import App from "../Chatgpt/ChatGpt_Clong/src/App";
import CardInnerDsa from "./Components/CardInnerDsa";
import CardInnerCs from "./Components/CardInnerCs";
import CardInnerEng from "./Components/CardInnerEng";
import {
  BrowserRouter,
  createBrowserRouter,
  Navigate,
  Route,
  Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import CardInnerDev from "./Components/CardInnerDev";
import Main from "./Components/Main/Main";
import Login from "./Components/Login";
import CardInnerapt from "./Components/CardInnerapt";
import SignupPage from "./Components/Signup";

import Todolist from "./Components/Task/Todolist";
import Contact from "./Components/Contact";
import PrivateRoute from "./Components/PrivateRoute";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import ProtectedRoute from "./Components/ProtectedRoute";
const App1 = () => {
  const [field, setfield] = useState("Enginnering");
  // const navigate = useNavigate();
  const auth = getAuth();
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (!user) {
  //       // If no user is signed in, redirect to the signup page
  //       navigate("/Login");
  //     }
  //   });

  //   return () => unsubscribe(); // Clean up the subscription
  // }, [auth, navigate]);

  return (
    <>
      <Routes>
        {/*        
      {!isAuthenticated && (
          <>
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<SignupPage />} />
          </>
        )} */}

        {/* {isAuthenticated && (
          <>
            <Route path="/Login" element={<Navigate to="/" replace />} />
            <Route path="/Signup" element={<Navigate to="/" replace />} />
          </>
        )} */}

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Main field={field} setfield={setfield}></Main>
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/CardInner" element={<CardInner />}></Route>
        <Route path="/CardInnerDev" element={<CardInnerDev />}></Route>
        <Route path="/CardInnerDsa" element={<CardInnerDsa />}></Route>
        <Route path="/CardInnerCs" element={<CardInnerCs />}></Route>
        <Route path="/CardInnerEng" element={<CardInnerEng />}></Route>
        <Route path="/CardInnerapt" element={<CardInnerapt />}></Route>
        <Route path="/Signup" element={<SignupPage />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/chat" element={<App />}></Route>
        <Route path="/task" element={<Todolist />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
};

export default App1;

// import React, { useState, useEffect } from "react";
// import { Routes, Route, useNavigate } from "react-router-dom";
// import { getAuth } from "firebase/auth";
// import { app } from "./Components/firebase";
// import Main from "./Components/Main/Main";
// import Login from "./Components/Login";
// import SignupPage from "./Components/Signup";
// import CardInner from "./Components/CardInner/CardInner";
// import CardInnerDev from "./Components/CardInnerDev";
// import CardInnerDsa from "./Components/CardInnerDsa";
// import CardInnerCs from "./Components/CardInnerCs";
// import CardInnerEng from "./Components/CardInnerEng";
// import CardInnerapt from "./Components/CardInnerapt";
// import App from "../Chatgpt/ChatGpt Clong/src/App";
// import Todolist from "./Components/Task/Todolist";
// import Contact from "./Components/Contact";
// import ProtectedRoute from "./Components/ProtectedRoute"; // Import the ProtectedRoute component

// const App1 = () => {
//   const [field, setfield] = useState("Enginnering");
//   const [authenticated, setAuthenticated] = useState(false);
//   const nav = useNavigate();

//   useEffect(() => {
//     const auth = getAuth(app);
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         setAuthenticated(true);
//       } else {
//         setAuthenticated(false);
//         nav("/Login");
//       }
//     });
//     return unsubscribe;
//   }, [nav]);

//   return (
//     <Routes>
//       <Route
//         path="/"
//         element={
//           <ProtectedRoute
//             element={<Main field={field} setfield={setfield} />}
//           />
//         }
//       />
//       <Route path="/CardInner" element={<CardInner />} />
//       <Route path="/CardInnerDev" element={<CardInnerDev />} />
//       <Route path="/CardInnerDsa" element={<CardInnerDsa />} />
//       <Route path="/CardInnerCs" element={<CardInnerCs />} />
//       <Route path="/CardInnerEng" element={<CardInnerEng />} />
//       <Route path="/CardInnerapt" element={<CardInnerapt />} />
//       <Route
//         path="/Signup"
//         element={authenticated ? <Login /> : <SignupPage />}
//       />
//       <Route
//         path="/Login"
//         element={
//           authenticated ? <Main field={field} setfield={setfield} /> : <Login />
//         }
//       />
//       <Route path="/chat" element={<App />} />
//       <Route path="/task" element={<Todolist />} />
//       <Route path="/contact" element={<Contact />} />
//     </Routes>
//   );
// };

// export default App1;

// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import Main from "./Components/Main/Main";
// import Login from "./Components/Login";
// import SignupPage from "./Components/Signup";
// import CardInner from "./Components/CardInner/CardInner";
// import CardInnerDev from "./Components/CardInnerDev";
// import CardInnerDsa from "./Components/CardInnerDsa";
// import CardInnerCs from "./Components/CardInnerCs";
// import CardInnerEng from "./Components/CardInnerEng";
// import CardInnerApt from "./Components/CardInnerapt";
// import App from "../Chatgpt/ChatGpt Clong/src/App";
// import Todolist from "./Components/Task/Todolist";
// import Contact from "./Components/Contact";

// const App1 = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const auth = getAuth();
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => unsubscribe();
//   }, []);

//   const PrivateRoute = ({ children }) => {
//     return user ? children : <Navigate to="/login" />;
//   };

//   const AuthRoute = ({ children }) => {
//     return user ? <Navigate to="/" /> : children;
//   };

//   return (
//     <Router>
//       <Routes>
//         {/* Protected Routes */}
//         <Route
//           path="/"
//           element={
//             <PrivateRoute>
//               <Main />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/CardInner"
//           element={
//             <PrivateRoute>
//               <CardInner />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/CardInnerDev"
//           element={
//             <PrivateRoute>
//               <CardInnerDev />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/CardInnerDsa"
//           element={
//             <PrivateRoute>
//               <CardInnerDsa />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/CardInnerCs"
//           element={
//             <PrivateRoute>
//               <CardInnerCs />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/CardInnerEng"
//           element={
//             <PrivateRoute>
//               <CardInnerEng />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/CardInnerapt"
//           element={
//             <PrivateRoute>
//               <CardInnerApt />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/chat"
//           element={
//             <PrivateRoute>
//               <App />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/task"
//           element={
//             <PrivateRoute>
//               <Todolist />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/contact"
//           element={
//             <PrivateRoute>
//               <Contact />
//             </PrivateRoute>
//           }
//         />

//         {/* Auth Routes */}
//         <Route
//           path="/login"
//           element={
//             <AuthRoute>
//               <Login />
//             </AuthRoute>
//           }
//         />
//         <Route
//           path="/signup"
//           element={
//             <AuthRoute>
//               <SignupPage />
//             </AuthRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App1;
