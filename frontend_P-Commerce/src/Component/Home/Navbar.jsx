import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <center><nav className="navbar">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item" style={{ marginRight: "60px" }}>
                <a className="nav-link" href="/" id="hom">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown" style={{ marginRight: "60px" }}>
                <a className="nav-link" href="/products ">                  
                  Products
                </a>
              </li>
              {/* <li className="nav-item dropdown" style={{ marginRight: "60px" }}>
                <a className="nav-link" href="/alumni-nearby">
                  {" "}
                  Alumni Nearby
                </a>
              </li> */}
              <li className="nav-item dropdown" style={{ marginRight: "60px" }}>
                <a className="nav-link" href="/About-Us">
                  {" "}
                  About US
                </a>
              </li>
              <li className="nav-item dropdown" style={{ marginRight: "60px" }}>
                <a className="nav-link" href="/Contact">
                  {" "}
                  Contact Us
                </a>
              </li>
              <li className="nav-item dropdown" style={{ marginRight: "60px" }}>
                <a className="nav-link" href="/signUp">
                  {" "}
                    Sign Up
                </a>
              </li>
              <li className="nav-item dropdown" style={{ marginRight: "60px" }}>
                <a className="nav-link" href="/Login">
                  {" "}
                    Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav></center>
    </div>
  );
}
