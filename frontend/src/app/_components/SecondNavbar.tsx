"use client"; // Required for client components in Next.js

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import "../css/SecondNavbar.css";

// Define the component type (FC = Functional Component)
const SecondNavbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar2">
      <div className="navbar-container2">
        <div className="menu-icon2" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={menuOpen ? "nav-menu2 active" : "nav-menu2"}>
          <li className="nav-item2">
            <Link href="/manage" className="nav-links2">
              Manage
            </Link>
          </li>
          <li className="nav-item2">
            <Link href="/stats" className="nav-links2">
              Clan Stats
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SecondNavbar;
