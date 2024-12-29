import React, { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";
import menue_icon from "../../Chatgpt/ChatGpt_Clong/src/assets/menu_icon.png"
import "./SideBar.css";

const SideBar = ({ field, setfield }) => {
  const [showSideBar, setshowSideBar] = useState(true); // Sidebar visibility state
  const [isEducationOpen, setIsEducationOpen] = useState(false); // Dropdown state for Education
  const nav = useNavigate();

  const handleSideBar = () => {
    setshowSideBar((prevState) => !prevState); // Toggle between show and hide
  };

  useEffect(() => {
    // Check if the device width is larger than 768px (for example, tablets or larger)
    if (window.innerWidth > 768) {
      setshowSideBar(true); // For larger devices, default to true
    } else {
      setshowSideBar(false); // For smaller devices, default to false
    }

    // Add resize event listener to adjust the sidebar state on window resize
  }, []);
  const handleOut = () => {
    localStorage.removeItem("isAuthenticated"); // Clear auth flag
    nav("/Login"); // Redirect to login page
  };
  // const handleOut = () => {
  //   const auth = getAuth(app);
  //   signOut(auth).then((res) => {
  //     localStorage.setItem("isAuthenticated", false),

  //     nav("/Login");
  //     console.log("Shutting down...")

  //   })
  //   .catch(res => {
  //     nav("/Signup")
  //   })
  // };

  const toggleEducationDropdown = () => {
    setIsEducationOpen((prevState) => !prevState); // Toggle Education dropdown
  };

  return (
    <div style={{ marginBottom: "1rem", backgroundColor: "#f0f4f9" }}>
      <div
        className="menu-icon-container"
        style={{
          display: "flex",
          gap: "30px",
          marginBottom: "20px",
          alignItems: "center",
        }}
      >
        <img
          className="menu-icon"
          src={menue_icon}
          onClick={handleSideBar}
          alt="Menu Icon"
        />
        <span className="fs-5 fw-semibold">LearnHub</span>
      </div>

      <div
        className={`flex-shrink-0 p-3 sd ${
          showSideBar ? "sidebar-show" : "sidebar-hide"
        }`}
        style={{ marginTop: "50px", minHeight: "100vh" }}
      >
        <ul className="list-unstyled ps">
          <li onClick={() => setfield("Enginnering")} className="mb-1 active">
            <button className="btn btn-toggle active d-inline-flex align-items-center rounded border-0 collapsed">
              Home
            </button>
          </li>

          <li className="mb-1">
            <button
              onClick={toggleEducationDropdown} // Toggle Education dropdown
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              aria-expanded={isEducationOpen ? "true" : "false"}
            >
              Education
            </button>
            {isEducationOpen && (
              <div className="collapse show">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li
                    onClick={() => {
                      setfield("Engineering");
                    }}
                  >
                    <a
                      href="#"
                      className="link-body-emphasis d-inline-flex text-decoration-none rounded active"
                    >
                      Engineering
                    </a>
                  </li>
                  <li
                    onClick={() => {
                      setfield("Intermediate");
                    }}
                  >
                    <a
                      href="#"
                      className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                    >
                      Intermediate
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </li>

          {/* <li className="mb-1">
            <button
              onClick={() => nav("/chat")}
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
            >
              Ask doubts?
            </button>
          </li> */}
          <li className="mb-1">
            <button
              onClick={() => nav("/task")}
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
            >
              Task Manager
            </button>
          </li>
          <li className="border-top my-3" />
          <li className="mb-1">
            <button
              onClick={() => nav("/contact")}
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
            >
              Contact
            </button>
          </li>
          <li className="mb-1">
            <button
              onClick={() => handleOut()}
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
            >
              Sign Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
