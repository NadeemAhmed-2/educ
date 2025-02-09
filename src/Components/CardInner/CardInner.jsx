import React from "react";
import "../../App.css";
import MapCard from "../MapCard";

const CardInner = () => {
  const Info = [
    {
      name: "C",
      Beginner: "https://www.youtube.com/watch?v=EjavYOFoJJ0&list=PLdo5W4Nhv31a8UcMN9-35ghv8qyFWD9_S",
      Inter: "https://www.youtube.com/watch?v=irqbmMNs2Bo&t=32s",
      Pro: "https://www.youtube.com/watch?v=irqbmMNs2Bo&t=32s",
    },
    {
      name: "Python",
      Beginner: "https://www.youtube.com/playlist?list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0",
      Inter: "https://www.youtube.com/watch?v=hEgO047GxaQ&list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3&index=3",
      Pro: "https://www.youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg",
    },
    {
      name: "Java",
      Beginner: "https://www.youtube.com/playlist?list=PLsyeobzWxl7pe_IiTfNyr55kwJPWbgxB5",
      Inter: "https://www.youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q",
      Pro: "",
    },
    {
      name: "C++",
      Beginner: "https://www.youtube.com/playlist?list=PLdo5W4Nhv31YU5Wx1dopka58teWP9aCee",
      Inter: "",
      Pro: "",
    },
  ];

  return (
    <>
      <div
        className="d-flex"
        style={{ flexDirection: "column" }}
      >
        <div className="text">
          <h1>Programming Languages</h1>
          <p>
            Programming languages are the building blocks of the digital world.
            They empower you to bring ideas to life, solve complex problems, and
            open doors to endless opportunities.
          </p>
          <p><h2>Key Point </h2>
          Remember: Learning programming is like unlocking a superpower. With every line of code, you're shaping a better world and securing a brighter future for yourself. Dive in, and let curiosity lead the way!
          </p>
        </div>
        <div className="container">
          {Info.map((item, key) => (
            <MapCard key={key} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardInner;
