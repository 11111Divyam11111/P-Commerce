import React from "react";
import "./Getapp.css";
import Play from "../Image/Play_Store.png"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Getapp() {
  return (
    <div className="Appsection">
      <section id="getApp">
        <div className="container">
          <h2>Get Our App</h2>
          <p className="p-app">
            Download our app to enjoy our services on the go!
          </p>
          <div className="app-links">
            <a href="https://example.com/download-android" className="app-link">
              <img
                width="50"
                height="50"
                src={Play}
                alt="google-play"
                style={{color:"white"}}
              />
              <span>Google Play</span>
            </a>
          </div>
        </div>
      </section>
      <hr/>
    </div>
  );
}
