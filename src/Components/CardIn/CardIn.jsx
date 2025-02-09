import React, { useState } from "react";
import "./CardIn.css";
import enginner from "../../assets/11zon_cropped (2).png";
import inter from "../../assets/11zon_cropped (3).png";
import { useNavigate } from "react-router-dom";
import Footer from "../footer";
import TestimonialSlider from "../../Components copy/TestimonialSlider";
const CardIn = ({ field, setfield }) => {
  const nav = useNavigate();
   const [fe,setfe] = useState("");
  // Function to handle navigation with props
  const handleNavigate = (id) => {
    if(id==1)
    nav("/EngineeringDummy")
  else
    nav("/InterDummy");
    // nav("/protect", { state: { id , fe} }); // Pass props via state
  };

  // Example card data
  const obj = [
    {
      id: 1,
      text: "Engineering",
      image: enginner,
    },
    {
      id: 2,
      text: "Intermediate",
      image: inter,
    },
  ];

  return (
    <>
      <div className="matter-div">
        <h5>Find by Specialization</h5>
        <p>Simply browse through our extensive list of trusted resources.</p>
      </div>
      <div className="all-cards">
        {obj.map((card) => (
          <div
            className="card-inn"
            onClick={() => handleNavigate(card.id)} // Navigate on click
            key={card.id}
          >
            <img src={card.image} alt={card.text} />
            <h5>{card.text}</h5>
          </div>
        ))}
      </div>

      {/* <TestimonialSlider/>
     <Footer/> */}
    </>
  );
};

export default CardIn;
