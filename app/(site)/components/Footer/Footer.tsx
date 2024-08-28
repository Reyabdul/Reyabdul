import React from "react";

import "../../../globals.css";
import "./Footer.css";

export default function Footer() {
  let date: Date = new Date();

  return (
    <footer className="footer" id="footer">
      <p className="copyright">&#169;Rey Abdul {date.getFullYear()}</p>
        {/* <button className="contact-button button" id="contact-button">
            <span><p className="contact">Contact</p></span>
        </button> */}
    </footer>
  );
}
