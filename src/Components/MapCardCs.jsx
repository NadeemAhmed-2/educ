import React, { useState } from "react";
import ChildBoxCs from "./ChildBoxCs";
const MapCardCs = ({ item }) => {
  const [showChildren, setShowChildren] = useState(false);

  const handleToggle = () => {
    setShowChildren(!showChildren);
  };

  return (
    <div>
      <div className="box" style={{ minWidth: "80vw" }} onClick={handleToggle}>
        <span className="text">{item.name}</span>
        <span className="dropdown-icon">
          {showChildren ? "\u25B2" : "\u25BC"}
        </span>
      </div>

      {/* Children Boxes */}
      {showChildren && (
        <div className="child-container">
          {[1].map((index) => (
            <ChildBoxCs key={index} index={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MapCardCs;
