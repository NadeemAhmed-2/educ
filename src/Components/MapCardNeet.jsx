import React, { useState } from "react";
import ChildBoxEng from "./ChildBoxEng";
import ChildBoxNeet from "./ChildBoxNeet";

const MapCardNeet = ({ item }) => {
  const [showChildren, setShowChildren] = useState(false);

  const handleToggle = () => {
    setShowChildren(!showChildren);
  };

  return (
    <div>
      <div className="box" style={{ minWidth: "80%" }} onClick={handleToggle}>
        <span className="text">{item.name}</span>
        <span className="dropdown-icon">
          {showChildren ? "\u25B2" : "\u25BC"}
        </span>
      </div>

      {/* Render child boxes for chapters */}
      {showChildren && item.chapters && (
        <div className="child-container">
          {item.chapters.map((chapter, index) => (
            <ChildBoxNeet key={index} chapter={chapter} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MapCardNeet;
