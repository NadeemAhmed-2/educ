// import React, { useEffect } from "react";
// import InterCard from "../InterCard/InterCard";
// import Enginnering from "../Enginnering/Enginnering";
// import SideBar from "../SideBar/SideBar";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { app } from "../firebase";
// import { useAuth } from "../Context";
// import Login from "../Login";
// import { useNavigate } from "react-router-dom";
// const Main = ({ field, setfield }) => {
//   const { user, loading } = useAuth();
//   const navigate = useNavigate();
//   const auth = getAuth();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (!user) {
//         // If no user is signed in, redirect to the signup page
//         navigate("/Login");
//       }
//     });

//     return () => unsubscribe(); // Clean up the subscription
//   }, [auth, navigate]);

//   return (
//     <>
//       <SideBar field={field} setfield={setfield}></SideBar>
//       {/* {!user ? <Login/> : null} */}
//       {user && field === "Intermediate" ? (
//         <InterCard field={field}/>
//       ) : <Enginnering/>}

//     </>
//   );
// };
// export default Main;

import React, { useEffect } from "react";
import InterCard from "../InterCard/InterCard";
import Enginnering from "../Enginnering/Enginnering";
import SideBar from "../SideBar/SideBar";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuth } from "../Context";
import { useNavigate, useLocation } from "react-router-dom";

const Main = ({ field, setfield }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth();

  useEffect(() => {
    const restrictedPaths = ["/Login", "/Signup"]; // Paths not allowed on this component

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // Redirect to Login if user is not authenticated
        navigate("/Login");
      } else if (restrictedPaths.includes(location.pathname)) {
        // Redirect authenticated users away from restricted paths
        navigate("/"); // Redirect to home or another route
      }
    });

    return () => unsubscribe(); // Clean up subscription
  }, [auth, navigate, location.pathname]);

  return (
    <>
      <SideBar field={field} setfield={setfield} />
      {user && field === "Intermediate" ? (
        <InterCard field={field} />
      ) : (
        <Enginnering />
      )}
    </>
  );
};

export default Main;
