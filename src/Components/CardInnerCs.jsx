import React from "react";
import "../App.css"
import MapCardCs from "./MapCardCs";
const CardInnerCs = () => {
  const Info = [
    {
      name: "Database management system",
      Basic_to_Advance:"https://www.youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y"
    },
    {
      name: "Object oriented Programming",
      Basic_to_Advance:
        "https://www.youtube.com/playlist?list=PL9gnSGHSqcno1G3XjUbwzXHL8_EttOuKk",
    },
    {
      name: "Computer Networks",
      Basic_to_Advance:
        "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_",
    },
    {
      name: "Software Engineering",
      Basic_to_Advance:
        "https://www.youtube.com/playlist?list=PLxCzCOWd7aiEed7SKZBnC6ypFDWYLRvB2",
    },
    {
      name: "Operating System",
      Basic_to_Advance:
        "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p",
    },

  ];

  return (
    <>
      <div
        className="d-flex"
        style={{ flexDirection: "column", margin: "3rem" }}
      >
        <div className="text">
          <h1>Computer Subjects</h1>
          <p></p>
          <p>
            <h2>Key Point </h2>
          </p>
        </div>
        <div className="container">
          {Info.map((item, key) => (
            <MapCardCs key={key} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardInnerCs;
