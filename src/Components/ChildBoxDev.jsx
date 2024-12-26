import { FaYoutube } from "react-icons/fa";

const ChildBoxDev = ({ index, item }) => {
  const handleLinkClick = (e) => {
    e.stopPropagation(); // Prevents toggling the parent box
    let link = "";
    if (index === 1) {
      link = item.Basic; // Beginner URL
    } else if (index === 2) {
      link = item.Advance; // Intermediate URL
    }
    if (link) {
      window.open(link, "_blank"); // Opens the link in a new tab
    } else {
      console.error("No link available for this level.");
    }
  };

  return (
    <div className="container">
      <div className="box">
        <span className="text">
          {index === 1 ? "Basic" : index === 2 ? "Advance" : ""}
        </span>
        <FaYoutube
          onClick={handleLinkClick}
          style={{ color: "red", fontSize: "40px", marginLeft: "10px" }}
        />
      </div>
    </div>
  );
};

export default ChildBoxDev;
