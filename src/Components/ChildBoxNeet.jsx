
import React from "react";
import { FaYoutube } from "react-icons/fa";

const ChildBoxNeet = ({ chapter }) => {
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
      <div className="box s-box">
        <span className="text">{chapter.name}</span>
        <FaYoutube
          onClick={handleLinkClick}
          style={{ color: "red", fontSize: "40px", marginLeft: "10px" }}
        />
      </div>
    </div>
  );
};

export default ChildBoxNeet;
