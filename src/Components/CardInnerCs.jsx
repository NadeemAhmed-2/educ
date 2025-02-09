import React from "react";
import "../App.css";
import MapCardCs from "./MapCardCs";
const CardInnerCs = () => {
  const Info = [
    {
      name: "Database management system",
      Fundamentals:
        "https://www.youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y",
    },
    {
      name: "Object oriented Programming",
      Fundamentals:
        "https://www.youtube.com/playlist?list=PL9gnSGHSqcno1G3XjUbwzXHL8_EttOuKk",
    },
    {
      name: "Computer Networks",
      Fundamentals:
        "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_",
    },
    {
      name: "Software Engineering",
      Fundamentals:
        "https://www.youtube.com/playlist?list=PLxCzCOWd7aiEed7SKZBnC6ypFDWYLRvB2",
    },
    {
      name: "Operating System",
      Fundamentals:
        "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p",
    },
  ];

  return (
    <>
      <div
        className="d-flex d-apt"
        style={{ flexDirection: "column"}}
      >
        <div className="text d-text">
          <h1>Computer Subjects</h1>
          <p>
            Mastering computer science subjects like SQL, OOPs (Object-Oriented
            Programming), Computer Networks (CN), Software Engineering (SE), and
            Operating Systems (OS) is essential for students aiming to build a
            strong foundation in technology and pursue careers in the
            ever-growing IT industry. These subjects not only develop
            problem-solving skills but also equip students with the tools to
            create innovative solutions and excel in their professional
            endeavors.
          </p>
          <p>
            <h2>Key Point</h2>
            "Mastering core computer science subjects through consistent
            practice and real-world application is the key to excelling in the
            tech industry."
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
