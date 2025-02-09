// import React from "react";
// import "../App.css";
// import MapCardapt from "./MapCardapt";
// const CardInnerapt = () => {
//   const Info = [
//     {
//       name: "Aptitude",
//       Basic_to_Advance:
//         "https://www.youtube.com/playlist?list=PLpyc33gOcbVA4qXMoQ5vmhefTruk5t9lt",
//     },
//     {
//       name: "Reasoning",
//       Basic_to_Advance:
//         "https://www.youtube.com/playlist?list=PLpyc33gOcbVADMKqylI__O_O_RMeHTyNK",
//     },
//     {
//       name: "Aptitude and Reasoning",
//       Basic_to_Advance:
//         "https://www.youtube.com/playlist?list=PL8p2I9GklV454LdGfDOw0KkNazKuA-6B2",
//     },

//   ];

//   return (
//     <>
//       <div
//         className="d-flex"
//         style={{ flexDirection: "column", margin: "3rem" }}
//       >
//         <div className="text">
//           <h1>Aptitude and reasoning</h1>
//           <p>
//             Aptitude and reasoning are not just topics to study—they are skills
//             that define how well you think, solve problems, and make decisions
//             under pressure. These skills are at the heart of placement exams and
//             competitive tests because they reflect your ability to adapt and
//             excel in dynamic, real-world scenarios.
//           </p>
//           <p>
//             <h2>Key Point </h2>
//             With consistent practice, aptitude and reasoning will become second
//             nature, and the confidence you gain will radiate through every exam
//             and interview. The path might be challenging, but the rewards are
//             worth it—a dream job, a bright career, and the pride of knowing that
//             your success is the result of your hard work and smart thinking. So,
//             gear up and start your journey today. Your future
//             self will thank you!
//           </p>
//         </div>
//         <div className="container">
//           {Info && Info.map((item, key) => (
//             <MapCardapt key={key} item={item} />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default CardInnerapt;

import React from "react";
import "../App.css";
import MapCardapt from "./MapCardapt";

const CardInnerapt = () => {
  const Info = [
    {
      name: "Aptitude",
      Fundamentals:
        "https://www.youtube.com/playlist?list=PLpyc33gOcbVA4qXMoQ5vmhefTruk5t9lt",
    },
    {
      name: "Reasoning",
      Fundamentals:
        "https://www.youtube.com/playlist?list=PLpyc33gOcbVADMKqylI__O_O_RMeHTyNK",
    },
    {
      name: "Aptitude and Reasoning",
      Fundamentals:
        "https://www.youtube.com/playlist?list=PL8p2I9GklV454LdGfDOw0KkNazKuA-6B2",
    },
  ];

  return (
    <>
      <div
        className="d-flex d-apt"
        style={{ flexDirection: "column" }}
      >
        <div className="text">
          <h1>Aptitude</h1>
          <p>
            Aptitude and reasoning are not just topics to study—they are skills
            that define how well you think, solve problems, and make decisions
            under pressure. These skills are at the heart of placement exams and
            competitive tests because they reflect your ability to adapt and
            excel in dynamic, real-world scenarios.
          </p>
          <p>
            <h2>Key Point </h2>
            With consistent practice, aptitude and reasoning will become second
            nature, and the confidence you gain will radiate through every exam
            and interview. The path might be challenging, but the rewards are
            worth it—a dream job, a bright career, and the pride of knowing that
            your success is the result of your hard work and smart thinking. So,
            gear up and start your journey today. Your future self will thank
            you!
          </p>
        </div>
        <div className="container">
          {Info.map((item, key) => (
            <MapCardapt key={key} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardInnerapt;
