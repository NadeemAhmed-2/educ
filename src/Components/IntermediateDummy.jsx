import React, { useEffect, useState } from "react";
import jeeImage from "../assets/jee.jpg";
import neetImage from "../assets/neet'.jpg";
import eamcetImage from "../assets/eamcet.jpg";
import books from "../assets/books.jpg";
import "./InterCard/InterCard.css";
import { Card } from "./Card/Card";
import SideBar from "./SideBar/SideBar";
const InterCardDummy = ({ field, setfield }) => {
  const examsDetails = [
    {
      CardImage: jeeImage,
      CardName: "Engineering",
      CardBody: "Jee | Bits | Cuet",
    },
    {
      CardImage: neetImage,
      CardName: "Neet",
      CardBody: "MBBS",
    },
    {
      CardImage: books,
      CardName: "Books",
      CardBody: "Books",
    },
    // {
    //     CardImage: eamcetImage,
    //     CardName: "JEE MAINS",
    //     CardBody: "Exam for entrance test",
    // }
  ];

  const [isLap, setisLap] = useState(false);
  useEffect(() => {
    if (window.innerWidth >= 768) setisLap(true);
  }, [isLap]);
  return (
    <>
      <div className="last">
        {isLap ? <SideBar /> : ""}
        <div className="engineering-container">
          <div className="box-sh">
            {" "}
            <h3 className="engineering-title">Intermediate</h3>
          </div>

          <div className="flex-main inter-main">
            {examsDetails &&
              examsDetails.map((card) => {
                return <Card card={card} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default InterCardDummy;
