import React, { useEffect, useState } from "react";
import jeeImage from "../../assets/jee.jpg";
import neetImage from "../../assets/neet'.jpg";
import eamcetImage from "../../assets/eamcet.jpg";
import "./InterCard.css";
import { Card } from "../Card/Card";
import SideBar from "../SideBar/SideBar";
const InterCard = () => {
  const examsDetails = [
    {
      CardImage: jeeImage,
      CardName: "Engineering",
      CardBody: "Enginnering Entrance",
    },
    {
      CardImage: neetImage,
      CardName: "Neet",
      CardBody: "MBBS Entrance",
    },
    {
      CardImage: neetImage,
      CardName: "Books",
      CardBody: "Books",
    },
    // {
    //     CardImage: eamcetImage,
    //     CardName: "JEE MAINS",
    //     CardBody: "Exam for entrance test",
    // }
  ];

 
  return (
    <>
      {isLap ? <SideBar /> : ""}
      <div className="engineering-container">
        <div className="box-sh">
          {" "}
          <h3 className="engineering-title">Engineering</h3>
        </div>

        <div className="flex-main">
          {examsDetails &&
            examsDetails.map((card) => {
              return <Card card={card} />;
            })}
        </div>
      </div>
    </>
  );
};

export default InterCard;
