import React from "react";
import "./Navbar.css";
import { Link ,NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container">
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <h4 className="fw-bold">JOBS PORTAL</h4>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
          <ul className="navbar-nav  m-auto ">
            <li className="nav-item me-4">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink to={"/statistics"}>Statistics</NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink  to={"/applied-jobs"}>Applied Jobs</NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink to={"/blog"}>Blog</NavLink>
            </li>
          </ul>
          <button className="applyBtn">Start Applying</button>
        </div>
      </div>
    </nav>
  </div>
  
  );
};

export default Navbar;
