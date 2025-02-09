import React, { useEffect, useState } from "react";
import "./Practice.css";
import img from "../../assets/challenge.jpg";
import test from "../../assets/Online-Test.png";
import { useNavigate } from "react-router-dom";
import { FaRegHandPointRight } from "react-icons/fa";
const Practice = () => {
  const nav = useNavigate("");
  const goToPractice = () => {
    window.location.href = "https://chitti-phi.vercel.app/";
  };
  const [ismobile, setismobile] = useState(false);
    useEffect(() => {
      if (window.innerWidth <= 468) {
        setismobile(true);
      }
    }, [ismobile]);
  return (
    <div className="ask">
      <div className="flex">
        <img className="pa-img img" src={img} alt="" />
        <div className="practice-info">
          <h2 style={{ color: "#23c6bc" }}>Practice | Online-Test</h2>
          <p>
            The "Practice Test" section is crucial for helping students prepare
            effectively by offering targeted exercises and mock tests. It boosts
            confidence, improves performance, and helps identify areas that need
            improvement.
          </p>
          <div onClick={() => nav("/test")}>
            {/* <div className="btns">
              <div style={{display:"flex", alignItems:"center"
              }}>
                <img className="test_img" src={test} />
                <p>Practice</p>
              </div>
            </div> */}
            <div className="btns1 bn1">
              <div className="btns1">
                <img className="test_img" src={test} />
                <p>Practice</p>
                {ismobile && (
                  <div className="last">
                    <FaRegHandPointRight
                      style={{ marginLeft: "10px", color: "black" }}
                      size={25}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;
