import React from "react";
import Link from "next/link";

// import { getProjects } from "@/sanity/sanity-utils";

//styles
import "../../../globals.css";
import "./Header.css";

export const NavLinks = [

  {
    name: "Projects",
    href: `/projects/`,
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navigation() {
  return (
    <nav className="navbar " id="navbar">
      <Link className="logo left " id="logo" href="/">
        <p>REY ABDUL</p>
      </Link>

      <div className="nav-links right" id="nav-links">
        <ul className="links">
          {NavLinks.map((link, i) => {
            return (
              <li className="button" key={`id_${i}`}>
                <Link href={link.href}>
                  <p>{link.name}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
