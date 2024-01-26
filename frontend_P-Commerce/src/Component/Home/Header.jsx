import React, { useState } from "react";
import { Button } from "@mui/material";
import "./Header.css";
import Login from "./Login.jsx";
// import Signup from "./Signup";
import logo from "../Image/logo.png"



export default function Header() {
  

  return (
    <div className="container">
      <div className="cont1">
        <div>
          <img
            src={logo}
            alt="mnit logo"
            className="img-fluid"
            style={{ width: "60px", borderRadius: "100px" }}
          />
        </div>
        <div>
          <h1 id="mnit">P-Commerce</h1>
        </div>
        {/* <Cart /> */}

      </div>
    </div>
  );
}
