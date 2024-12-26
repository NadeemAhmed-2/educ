import React from "react";
import "../App.css";
import MapCardDsa from "./MapCardDsa";

const CardInnerDsa = () => {
  const Info = [
    {
      name: "Dsa with Java",
      Basic_to_Advance:
        "https://www.youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz",
    },
    {
      name: "Dsa with c++",
      Basic_to_Advance:
        "https://www.youtube.com/watch?v=Nckx9qMy_kw&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=2",
    },
  ];

  return (
    <>
      <div
        className="d-flex"
        style={{ flexDirection: "column", margin: "3rem" }}
      >
        <div className="text">
          <h1>Data Structures and Algorithms</h1>
          <p>
            Data Structures and Algorithms (DSA) are fundamental topics in
            computer science that form the backbone of problem-solving in
            programming. Learning DSA is crucial for students, particularly
            those preparing for competitive placement exams.
          </p>
          <p>
            <h2>Key Point </h2>
            DSA is not just a subject to ace exams but a lifelong skill for students aspiring to work in technology. By mastering DSA, students enhance their problem-solving abilities, boost their performance in competitive placement exams, and increase their employability prospects. With persistence and practice, DSA can help you become a skilled programmer, ready to tackle real-world challenges and succeed in coding competitions and interviews.
          </p>
        </div>
        <div className="container">
          {Info.map((item, key) => (
            <MapCardDsa key={key} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardInnerDsa;
