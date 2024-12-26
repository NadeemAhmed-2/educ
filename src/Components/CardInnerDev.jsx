import React from "react";
import "../App.css";
import MapCardDev from "./MapCardDev";

const CardInnerDev = () => {
  const Info = [
    {
      name: "Html",
      Basic:
        "https://www.youtube.com/watch?v=HcOc7P5BMi4",
      Advance: "https://www.youtube.com/watch?v=HcOc7P5BMi4",
    },
    {
      name: "Css",
      Basic: "https://www.youtube.com/watch?v=ESnrn1kAD4E",
      Advnace: "https://www.youtube.com/watch?v=Edsxf_NBFrw&t=501s",
    },
    {
      name: "Tailwind Css",
      Basic: "https://www.youtube.com/playlist?list=PLu0W_9lII9ahwFDuExCpPFHAK829Wto2O",
      Advance: "https://www.youtube.com/@TailwindLabs",
    },
    {
      name: "Javascript",
      Basic: "https://www.youtube.com/watch?v=ajdRvxDWH4w&list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW",
      Advance: "https://www.youtube.com/playlist?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR",
    },
    {
      name: "Github",
      Basic: "https://www.youtube.com/watch?v=Ez8F0nW6S-w",
      Advance: "https://www.youtube.com/watch?v=RGOj5yH7evk",
    },
    {
      name: "React",
      Basic: "https://www.youtube.com/watch?v=eILUmCJhl64&t=47363s",
      Advance: "https://www.youtube.com/watch?v=-mJFZp84TIY&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt",
    },
    {
      name: "Next Js",
      Basic: "https://www.youtube.com/playlist?list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI",
      Advance: "https://www.youtube.com/playlist?list=PLu0W_9lII9agtWvR_TZdb_r0dNI8-lDwG",
    },
    {
      name: "Backend",
      Basic: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW",
      Advance: "https://www.youtube.com/watch?v=T55Kb8rrH1g&list=PLbtI3_MArDOkXRLxdMt1NOMtCS-84ibHH",
     
    },
  ];

  return (
    <>
      <div
        className="d-flex"
        style={{ flexDirection: "column", margin: "3rem" }}
      >
        <div className="text">
          <h1>Web Development</h1>
          <p>
            Learning web development is one of the most valuable skills in
            today's digital age. It empowers you to create websites and
            applications that bring ideas to life and solve real-world problems.
            As businesses, education, and entertainment increasingly move
            online, the demand for skilled web developers continues to grow,
            offering excellent career opportunities and earning potential.
          </p>
          <p>
            <h2>Key Point </h2>
            Web development is not just about coding; it’s about shaping the
            future. Take that first step today. Start small, keep practicing,
            and watch your skills and confidence grow. The digital world awaits
            your creativity and talent!
          </p>
        </div>
        <div className="container">
          {Info.map((item, key) => (
            <MapCardDev key={key} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardInnerDev;
