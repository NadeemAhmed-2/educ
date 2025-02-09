import React, { useEffect, useState } from "react";
import logo2 from "../../assets/mobile_img.jpg";
import logo1 from "../../assets/learnHub_logo.jpg";
import "./NewHome.css";
import CardIn from "../CardIn/CardIn";
import TestimonialSlider from "../../Components copy/TestimonialSlider";
import SideBar from "../SideBar/SideBar";
import Practice from "../Practice/Practice";
import Footer from "../footer";
import Ask from "../Ask/Ask";
import TaskF from "../TaskF/TaskF";
import { useNavigate } from "react-router-dom";
const NewHome = ({ field, setfield }) => {
  const [isMobile, setIsMobile] = useState(false);
  const nav=useNavigate()
  useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 780);
        
      };

      handleResize();
      // if(!localStorage.getItem("users")){
      //     nav("/Login")
      // }
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
  return (
    <>
    <div className="main-home"></div>
      <SideBar />
      <div className="new-home">
        <div className="slider">
          {!isMobile ?    <img src={logo1} alt=""/> :   <img src={logo2} alt=""/>}
        
        </div>

        <div className="more-info">
          <CardIn field={field} setfield={setfield}></CardIn>
        </div>
        <div style={{ marginTop: "5rem" }}>
          <TaskF />
          <Ask />
          <Practice />
        </div>
            
        <TestimonialSlider />
        <Footer />
      </div>
    </>
  );
};

export default NewHome;
