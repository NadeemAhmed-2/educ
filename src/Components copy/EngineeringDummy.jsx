// import React from "react";
// import { Card } from "../Components/Card/Card";
// import languages from "../assets/languages.jpg";
// import dev from "../assets/dev.jpg";
// import dsa from "../assets/dsa.jpg";
// import aptitude from "../assets/aptitude.jpg";
// import comp from "../assets/comp.jpg";
// import "../Components/Enginnering/Engineering.css";
// import SideBar from "../Components/SideBar/SideBar";
// const EnginneringDummy = ({ field,setfield }) => {
//   const examsDetails = [
//     {
//       key: 1,
//       CardImage: languages,
//       CardName: "Languages",
//       CardBody: "Programming Languages",
//     },
//     {
//       key: 2,
//       CardImage: dev,
//       CardName: "Development",
//       CardBody: "Development",
//     },
//     {
//       key: 3,
//       CardImage: comp,
//       CardName: "Computer",
//       CardBody: "Computer Subjects",
//     },

//     {
//       key: 4,
//       CardImage: dsa,
//       CardName: "DSA",
//       CardBody: "Data structures and Algorithms",
//     },
//     {
//       key: 5,
//       CardImage: aptitude,
//       CardName: "Aptitude",
//       CardBody: "Aptitude and Reasoning",
//     },
//   ];
//   return (
//     <>

//       <div className="flex-main-eng">

//         {examsDetails &&
//           examsDetails.map((card) => {
//             return <Card card={card} />;
//           })}
//       </div>

//     </>
//   );
// };

// export default EnginneringDummy;

import React, { useEffect, useState } from "react";
import { Card } from "../Components/Card/Card";
import languages from "../assets/languages.jpg";
import dev from "../assets/dev.jpg";
import dsa from "../assets/dsa.jpg";
import aptitude from "../assets/aptitude.jpg";
import comp from "../assets/comp.jpg";
import "../Components/Enginnering/Engineering.css";
import SideBar from "../Components/SideBar/SideBar";

const EnginneringDummy = ({ field, setfield }) => {
  const examsDetails = [
    {
      key: 1,
      CardImage: languages,
      CardName: "Languages",
      CardBody: "Programming Languages",
    },
    {
      key: 2,
      CardImage: dev,
      CardName: "Development",
      CardBody: "Development",
    },
    {
      key: 3,
      CardImage: comp,
      CardName: "Computer",
      CardBody: "Computer Subjects",
    },
    {
      key: 4,
      CardImage: dsa,
      CardName: "DSA",
      CardBody: "DSA",
    },
    {
      key: 5,
      CardImage: aptitude,
      CardName: "Aptitude",
      CardBody: "Aptitude and Reasoning",
    },
  ];
  const [isLap, setisLap] = useState(false);
  useEffect(() => {
    if (window.innerWidth >= 768) setisLap(true);
  }, [isLap]);
  return (
    <>
    <div className="last">
      {isLap ? <SideBar /> : " "}
      <div className="engineering-container">
        <div className="box-sh">
          {" "}
          <h3 className="engineering-title">Engineering</h3>
        </div>

        <div className="flex-main-eng">
          {examsDetails &&
            examsDetails.map((card) => {
              return <Card key={card.key} card={card} />;
            })}
        </div>
      </div>
      </div>
    </>
  );
};

export default EnginneringDummy;
