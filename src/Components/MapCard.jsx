import React, { useState } from "react";
import ChildBox from "./ChildBox";

const MapCard = ({ item }) => {
  const [showChildren, setShowChildren] = useState(false);

  const handleToggle = () => {
    setShowChildren(!showChildren);
  };

  return (
    <div className="mobile-flex">
      <div className="box" style={{ minWidth: "80%" }} onClick={handleToggle}>
        <span className="text">{item.name}</span>
        <span className="dropdown-icon">
          {showChildren ? "\u25B2" : "\u25BC"}
        </span>
      </div>

      {/* Children Boxes */}
      {showChildren && (
        <div className="child-container">
          {[1, 2,3].map((index) => (
            <ChildBox key={index} index={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MapCard;
