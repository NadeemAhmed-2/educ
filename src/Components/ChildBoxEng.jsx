// import { FaYoutube } from "react-icons/fa";

// const ChildBoxEng = ({ index, item }) => {
//   const handleLinkClick = (e) => {
//     e.stopPropagation(); // Prevents toggling the parent box
//     let link = "";
//     if (index === 1) {
//       link = item.Basic_to_Advance; // Beginner URL
//     } else 
//     link = "";
//     if (link) {
//       window.open(link, "_blank"); // Opens the link in a new tab
//     } else {
//       console.error("No link available for this level.");
//     }
//   };

//   return (
//     <div className="container">
//       <div className="box">
//         <span className="text">
//           {index === 1 ? "Basic_to_Advance" : ""}
//         </span>
//         <FaYoutube
//           onClick={handleLinkClick}
//           style={{ color: "red", fontSize: "40px", marginLeft: "10px" }}
//         />
//       </div>
//     </div>
//   );
// };

// export default ChildBoxEng;










import React from "react";
import { FaYoutube } from "react-icons/fa";

const ChildBoxEng = ({ chapter }) => {
  const handleLinkClick = (e) => {
    e.stopPropagation(); // Prevent toggling the parent box
    if (chapter.link) {
      window.open(chapter.link, "_blank"); // Open the chapter link in a new tab
    } else {
      console.error("No link available for this chapter.");
    }
  };

  return (
    <div className="container">
      <div className="box">
        <span className="text">{chapter.name}</span>
        <FaYoutube
          onClick={handleLinkClick}
          style={{ color: "red", fontSize: "40px", marginLeft: "10px" }}
        />
      </div>
    </div>
  );
};

export default ChildBoxEng;
