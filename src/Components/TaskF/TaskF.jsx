// import React from "react";
// import "./TaskF.css";
// import img from "../../assets/challenge.jpg";
// import test from "../../assets/Online-Test.png";
// const TaskF = () => {
//   return (
//     <div className="taskf">
//       <div className="flex">
//       <img src={img} alt="" />
//         <div className="practice-info">
//           <h2 style={{ color: "#23c6bc" }}>Task Manager</h2>
//           <p>
//             No Question is a Silly question! Feel free to ask as many doubts you
//             want. The more you ask, the better your understanding is. We will
//             reply to your doubts at the earliest.
//           </p>
//           <div>
//             <div className="btns">
//               <img className="test_img" src={test} />
//               <p>Task</p>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default TaskF;

import React, { useEffect, useState } from "react";
import "./TaskF.css";
import img from "../../assets/task-Photoroom.png";
import test from "../../assets/Online-Test.png";
import { FaLongArrowAltRight, FaRegHandPointRight } from "react-icons/fa";

const TaskF = () => {
  function goToDoubt() {
    console.log("clicked!");
    window.location.href = "https://task-beta-ten.vercel.app/";
  }
  const [ismobile, setismobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 468) {
      setismobile(true);
    }
  }, [ismobile]);
  return (
    <div className="ask">
      <div className="flex">
        <img className="img" src={img} alt="" />
        <div className="practice-info">
          <h2 style={{ color: "#23c6bc" }}>Task Manager</h2>
          <p>
            "Task Manager" is crucial for keeping courses, assignments, and
            student progress organized. It streamlines workflows, ensures
            deadlines are met, improves communication among instructors and
            students, and helps track performance to enhance the overall
            learning experience..
          </p>
          <div onClick={goToDoubt}>
            <div className="btns1 bn1" onClick={goToDoubt}>
              <a
                href="https://task-beta-ten.vercel.app/"
                className="btns1"
                style={{ cursor: "pointer" }}
                onClick={goToDoubt}
              >
                <img className="test_img" src={test} />
                <p>Task</p>
                {ismobile && (
                  <div className="last">
                    <FaRegHandPointRight style={{marginLeft:"10px",color:"black"}}size={25}/>
                  </div>
                )}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskF;
