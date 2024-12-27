"use client"; // Required for client components in Next.js

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import "../css/Navbar.css";

// Define the component type (FC = Functional Component)
const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link href="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/feedback" className="nav-links">
              Feedback/Support
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/register" className="nav-links">
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/login" className="nav-links">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;