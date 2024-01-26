import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="container">
      <div className="footer">
        <div className="about">
          <h3>About Us</h3>
          <p>This is the description of our Website.</p>
        </div>
        <div className="contact">
          <h3>Contact Us</h3>
          <p>
            Address: MNIT Jaipur, JLN Marg, Malaviya Nagar, Jaipur, Rajasthan
          </p>
          <p>Phone: +91 XXXXXXXXXX</p>
          <p>
            <a
              href="ContactUs@mnit.ac.in"
              className="footer-app-link"
              id="contact"
            >
              Email : Contactus@mnit.ac.in
            </a>
          </p>
        </div>
        <div className="social">
          <h3>Social Media</h3>
          <ul className="social-media-links">
            {/* <li>
              <a
                href="https://www.facebook.com/yourwebsite"
                className="footer-app-link"
              >
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/facebook-new.png"
                  alt="facebook-new"
                />
              </a>
            </li> */}
            <li>
              <a
                href="https://www.twitter.com/yourwebsite"
                className="footer-app-link"
              >
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/twitter-squared.png"
                  alt="twitter-squared"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/yourwebsite"
                class="footer-app-link"
              >
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/linkedin.png"
                  alt="linkedin"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/alcom_mnit?igshid=YzAwZjE1ZTI0Zg%3D%3D"
                className="footer-app-link"
              >
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/instagram-new--v1.png"
                  alt="instagram-new--v1"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
