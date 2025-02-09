// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "../../assets/logo-removebg-preview.png";
// import menue_icon from "../../assets/menu_icon.png";
// import "./SideBar.css";

// const SideBar = ({ field, setfield }) => {
//   const [showSideBar, setshowSideBar] = useState(true);
//   const [isEducationOpen, setIsEducationOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const nav = useNavigate();

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 750);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleOut = () => {
//     localStorage.removeItem("isAuthenticated");
//     nav("/Login");
//   };

//   const goToTask = () => {
//     window.location.href = "https://task-beta-ten.vercel.app/";
//   };

//   const goToDoubt = () => {
//     window.location.href = "https://chitti-phi.vercel.app/";
//   };

//   const toggleEducationDropdown = () => {
//     setIsEducationOpen((prev) => !prev);
//   };

//   if (isMobile) {
//     return (
//       <div className="bottom-nav">
//         <button onClick={() => nav("/home")}>
//           <i className="fas fa-home"></i>
//           <span>Home</span>
//         </button>
//         <button onClick={toggleEducationDropdown}>
//           <i className="fas fa-graduation-cap"></i>
//           <span>Education</span>
//         </button>

//         {/* Dropdown for Education (only visible when clicked) */}
//         {isEducationOpen && (
//           <div className="mobile-submenu">
//             <button onClick={() => nav("/EngineeringDummy")}>
//               <span onClick={()=>setIsEducationOpen(false)}>Engineering</span>
//             </button>
//             <button onClick={() => nav("/InterDummy")}>
//               <span onClick={()=>setIsEducationOpen(false)}>Intermediate</span>
//             </button>
//           </div>
//         )}

//         <button onClick={goToDoubt}>
//           <i className="fas fa-question-circle"></i>
//           <span>Doubt</span>
//         </button>
//         <button onClick={goToTask}>
//           <i className="fas fa-tasks"></i>
//           <span>Task</span>
//         </button>
//         <button onClick={() => nav("/contact")}>
//           <i className="fas fa-phone"></i>
//           <span>Contact</span>
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="sidebar-container">
//       <div className="sidebar-header">
//         <img
//           className="menu-icon"
//           src={menue_icon}
//           onClick={() => setshowSideBar((prev) => !prev)}
//           alt="Menu Icon"
//         />
//         <img className="logo" src={logo} alt="Logo" />
//       </div>

//       {showSideBar && (
//         <div className="sidebar">
//           <ul className="sidebar-menu">
//             <li onClick={() => nav("/home")}>
//               <button className="btn">Home</button>
//             </li>
//             <li>
//               <button onClick={toggleEducationDropdown} className="btn">
//                 Education
//               </button>
//               {isEducationOpen && (
//           <div className="mobile-submenu" style={{top:"20%",height:"100px"}}>
//             <button onClick={() => nav("/EngineeringDummy")}>
//               <span onClick={()=>setIsEducationOpen(false)}>Engineering</span>
//             </button>
//             <button onClick={() => nav("/InterDummy")}>
//               <span onClick={()=>setIsEducationOpen(false)}>Intermediate</span>
//             </button>
//           </div>
//         )}

//               {/* {isEducationOpen && (
//                 <ul className="submenu">
//                   <li onClick={() => nav("/EngineeringDummy")}>
//                     <span>Engineering</span>
//                   </li>
//                   <li onClick={() => nav("/InterDummy")}>
//                     <span>Intermediate</span>
//                   </li>
//                 </ul>
//               )} */}
//             </li>
//             <li>
//               <button onClick={goToDoubt} className="btn">
//                 Ask Doubts?
//               </button>
//             </li>
//             <li>
//               <button onClick={goToTask} className="btn">
//                 Task Manager
//               </button>
//             </li>
//             <li>
//               <button onClick={() => nav("/contact")} className="btn">
//                 Contact
//               </button>
//             </li>
//             <li>
//               <button onClick={handleOut} className="btn logout">
//                 Sign Out
//               </button>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SideBar;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo-removebg-preview-removebg-preview.png";
import menue_icon from "../../assets/menu_icon.png";
import "./SideBar.css";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import { getAuth, signOut } from "firebase/auth";
const SideBar = ({ field, setfield }) => {
  const [showSideBar, setshowSideBar] = useState(true);
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const nav = useNavigate();
  const [isadmin, setadmin] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 770);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // useEffect(() => {
  //   const admin = localStorage.getItem("user");
  //   // console.log(admin)
  //   if (admin === "varikalaanil@gmail.com") setadmin(true);
  // }, []);

  const navigate = useNavigate();
  const handleOut = () => {
    // const navigate = useNavigate();

    console.log("Logging out..");

    try {
      localStorage.removeItem("user");
      toast.success("Logged out successfully!");
      navigate("/Login");
    } catch (error) {
      toast.error("Logout failed. Try again.");
    }
  };
  const goToTask = () => {
    window.location.href = "https://task-beta-ten.vercel.app/";
  };

  const goToDoubt = () => {
    window.location.href = "https://chitti-phi.vercel.app/";
  };

  const toggleEducationDropdown = () => {
    setIsEducationOpen((prev) => !prev);
  };

  const toggleMoreDropdown = () => {
    setIsMoreOpen((prev) => !prev);
  };

  if (isMobile) {
    return (
      <div className="bottom-nav">
        <button onClick={() => nav("/home")}>
          <i className="fas fa-home"></i>
          <span>Home</span>
        </button>
        <button onClick={toggleEducationDropdown}>
          <i className="fas fa-graduation-cap"></i>
          <span>Education</span>
        </button>

        {/* Dropdown for Education (only visible when clicked) */}
        {isEducationOpen && (
          <div className="mobile-submenu">
            <button onClick={() => nav("/EngineeringDummy")}>
              <span onClick={() => setIsEducationOpen(false)}>Engineering</span>
            </button>
            <button onClick={() => nav("/InterDummy")}>
              <span onClick={() => setIsEducationOpen(false)}>
                Intermediate
              </span>
            </button>
          </div>
        )}

        <button onClick={goToDoubt}>
          <i className="fas fa-question-circle"></i>
          <span>Doubt</span>
        </button>
        <button onClick={goToTask}>
          <i className="fas fa-tasks"></i>
          <span>Task</span>
        </button>
        <button onClick={toggleMoreDropdown}>
          <i className="fas fa-ellipsis-h"></i>
          <span>More</span>
        </button>

        {isMoreOpen && (
          <div className="mobile-submenu mobile-sub">
            <button onClick={() => nav("/contact")}>
              <span>Contact</span>
            </button>
            <button onClick={handleOut}>
              <span>Sign Out</span>
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        {/* <img
          className="menu-icon"
          src={menue_icon}
          onClick={() => setshowSideBar((prev) => !prev)}
          alt="Menu Icon"
        /> */}
        <img className="logo" src={logo} alt="Logo" />
      </div>

      {showSideBar && (
        <div className="sidebar">
          <ul className="sidebar-menu">
            <li onClick={() => nav("/home")}>
              <button className="btn">Home</button>
            </li>
            <li>
              <button onClick={toggleEducationDropdown} className="btn">
                Education
              </button>
              {isEducationOpen && (
                <div
                  className="mobile-submenu"
                  style={{ top: "20%", height: "100px" }}
                >
                  <button onClick={() => nav("/EngineeringDummy")}>
                    <span onClick={() => setIsEducationOpen(false)}>
                      Engineering
                    </span>
                  </button>
                  <button onClick={() => nav("/InterDummy")}>
                    <span onClick={() => setIsEducationOpen(false)}>
                      Intermediate
                    </span>
                  </button>
                </div>
              )}
            </li>
            <li>
              <button onClick={goToDoubt} className="btn">
                Ask Doubts?
              </button>
            </li>
            <li>
              <button onClick={goToTask} className="btn">
                Task Manager
              </button>
            </li>
            <li>
              <button onClick={() => nav("/contact")} className="btn">
                Contact
              </button>
            </li>
            {localStorage.getItem("user") === "varikalaanil@gmail.com" && (
              <li>
                <button className="btn" onClick={() => nav("/admin")}>
                  Admin
                </button>
              </li>
            )}

            <li>
              <button onClick={handleOut} className="btn logout">
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SideBar;
