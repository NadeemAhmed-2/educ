
import React, { useEffect } from "react";
import InterCard from "../InterCard/InterCard";
import Enginnering from "../Enginnering/Enginnering";
import SideBar from "../SideBar/SideBar";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuth } from "../Context";
import { useNavigate, useLocation } from "react-router-dom";
import NewHome from "../NewHome/NewHome";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

const Main = ({ field, setfield }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth();

  useEffect(() => {
    const restrictedPaths = ["/Login", "/Signup"]; // Paths not allowed on this component
     let decision = localStorage.getItem("isAuthenticated")

      if(!decision){
         navigate("/Login")
      }
    
  },[]);

  return (
    <>
      <SideBar field={field} setfield={setfield} />
      {field === "Home" ? <NewHome field={field} setfield={setfield}/> : field === "Intermediate" ? (
        <InterCard field={field}/>
      ) : (
        <Enginnering />
      )}
    </>
  );
};

export default Main;
