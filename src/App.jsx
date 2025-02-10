import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import CardInner from "./Components/CardInner/CardInner";
import Home from "./Components/Home/Home";
// Optional: For Bootstrap JS features

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
// const ToDoList = React.lazy(() => import("./Components/Task/ToDoList"));
import Contact from "./Components/Contact";
import PrivateRoute from "./Components/PrivateRoute";
// import AppDup from "../src/Chatgpt/ChatGpt_Clong/src/Components/AppDup"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import ProtectedRoute from "./Components/ProtectedRoute";
import CardInnerNeet from "./Components/CardInnerNeet";
import InterCardDummy from "./Components/IntermediateDummy";
import NewHome from "./Components/NewHome/NewHome";
import EnginneringDummy from "./Components copy/EngineeringDummy";
import ScrollToTop from "./Components copy/ScrollToTop";
import Books from "./Components/Books/Books";
import TestPractice from "./Components/TestPractice/TestPractice";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import ProtectedAdminRoute from "./Components/ProtectedAdminRoute";
import ProtectedAuthRoute from "./Components/ProtectedAuthRoute";
import { ToastContainer } from "react-toastify";
const App1 = () => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const [field, setfield] = useState("Home");
  const navigate = useNavigate();
  const auth = getAuth();
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsAdmin(currentUser?.email === "varikalaanil@gmail.com");
    });
    return () => unsubscribe();
  }, [auth]);

  // useEffect(() => {
  //   if (localStorage.getItem("user")) navigate("/");
  //   else navigate("/")
  // }, []);

  //   // Clean up the subscription
  // }, []);

  return (
    <>
      <ScrollToTop />
      {/* <ToastContainer></ToastContainer> */}
      <Routes>
        {/* <Route
          path="/"
          element={<Main field={field} setfield={setfield}></Main>}
        ></Route> */}

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <NewHome />{" "}
            </ProtectedRoute>
          }
        />

        {/* <Route path="/" element={<NewHome />} /> */}
        <Route path="/CardInner" element={<CardInner />}></Route>
        <Route path="/CardInnerDev" element={<CardInnerDev />}></Route>
        <Route path="/CardInnerDsa" element={<CardInnerDsa />}></Route>
        <Route path="/CardInnerCs" element={<CardInnerCs />}></Route>
        <Route path="/CardInnerEng" element={<CardInnerEng />}></Route>
        <Route path="/CardInnerapt" element={<CardInnerapt />}></Route>
        {/* 
        <Route path="/Signup" element={<SignupPage />}></Route>

        <Route path="/Login" element={<Login />}></Route> */}

        <Route
          path="/Signup"
          element={
            <ProtectedRoute>
              <SignupPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Login"
          element={
      <Login></Login>
           
          }
        />

        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/protect" element={<ProtectedRoute />} />
        <Route path="/Neet" element={<CardInnerNeet />} />
        <Route path="/InterDummy" element={<InterCardDummy />} />
        <Route path="/home" element={<NewHome />} />
        <Route path="/EngineeringDummy" element={<EnginneringDummy />} />
        <Route path="/books" element={<Books />} />
        <Route path="/test" element={<TestPractice />} />
        <Route
          path="/admin"
          element={
           
              <AdminDashboard />
           
            // a
          }
        />

      </Routes>
      {/* <ToastContainer/> */}
    </>
  );
};

export const ProtectedRoutesForAdmin = ({ children }) => {
  const admin = localStorage.getItem("user");
  // console.log(admin.user.email)
  if (admin === "varikalaanil@gmail.com") {
    return children;
  } else {
    return <Navigate to="/Login" />;
  }
};

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem("user")) {
    return children;
  } else {
    return <Navigate to="/Login" />;
  }
};
export default App1;
