import React from "react";
import Link from "next/link";

//styles
import "../../../globals.css";
import "./header.css";

export default function Navigation() {

  return (
    <nav className="navbar" id="navbar">
        <Link className="logo left" id="logo" href="/">
          <p>REY ABDUL</p>
        </Link>

      <div className="nav-links right" id="nav-links">
        <ul className="links">
          filler
        </ul>

      </div>
    </nav>
  );
}
