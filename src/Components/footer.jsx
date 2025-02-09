import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Footer.css"; // Importing the CSS file for custom styling

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer text-white py-4">
      <div className="container1 mycont">
        <div className="row r1">
          {/* About Section */}
          <div className="col-md-5 px-4">
            <h5 className="footer-heading">About Us</h5>
            <p className="footer-text">
              EDUCONNECT is an online learning platform packed with valuable
              resources tailored for intermediate and engineering students,
              designed to make education accessible and engaging.
            </p>
          </div>

          {/* Contact Info */}
          <div className="col-md-5">
            <h5 className="footer-heading">Contact Us</h5>
            <p className="footer-text">
              <strong>Address:</strong> Yamnempet <br />
              <strong>Email:</strong> educonnect2003@gmail.com <br />
              <strong>Phone:</strong> 7013725762
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-4">
          <div className="col text-center">
            <p className="footer-copyright">
              &copy; 2025 LearnHub. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
