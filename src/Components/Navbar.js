import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand mx-auto" to="/">
          NYAAY SAHAYAK
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ms-auto justify-content-between">
            <li className="nav-item">
              <Link className="nav-link active" to="/" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link active" to="/About">
                About Us
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link active" to="/LegalAid">
                Legal Aid
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link active" to="/Awareness">
                Awareness
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link active" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
