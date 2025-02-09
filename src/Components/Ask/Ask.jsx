import React, { useEffect, useState } from "react";
import "./Ask.css";
import img from "../../assets/ask_img-Photoroom.png";
import test from "../../assets/Online-Test.png";
import { useNavigate } from "react-router-dom";
import { FaRegHandPointRight } from "react-icons/fa";
const Ask = () => {
  const [isMobile, setIsMobile] = useState(false);
  const goToDoubt = () => {
    window.location.href = "https://chitti-phi.vercel.app/";
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const navigator = useNavigate("");

  return (
    <div className="ask">
      <div className="flex">
        <div className="practice-info">
          {isMobile ? <img className="pract-img h-img" src={img} alt="" /> : ""}
          <h2 style={{ color: "#23c6bc" }}>Ask</h2>
          <p>
            The "Ask Doubts" section is essential for fostering student
            engagement and providing personalized support. It allows students to
            clarify concepts in real-time, ensuring a deeper understanding and
            better learning outcomes.
          </p>
          {/* <div className="btns1">
            <div className="btns1" onClick={goToDoubt}>
              <img className="test_img" src={test} />
              <p>Ask Questions</p>
            </div>
          </div> */}
          <div onClick={goToDoubt}>
            <div className="btns1 bn1 ">
              <div className="btns1" onClick={goToDoubt}>
                <img className="test_img" src={test} />
                <p>Ask</p>
                {isMobile && (
                  <div className="last">
                    <FaRegHandPointRight
                      style={{ marginLeft: "10px",color:"black" }}
                      size={25}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {!isMobile ? <img className="h-img" src={img} alt="" /> : ""}
        {/* {isMobile && (
          <div className="last1">
            <FaRegHandPointRight style={{ marginLeft: "10px" }} size={25} />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Ask;
