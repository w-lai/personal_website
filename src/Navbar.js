import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
       <div className="Navbar">
            <li className="navbar_link">
                <Link className="link" to="/">Home</Link>
            </li>
            <li className="navbar_link">
                <Link className="link" to="/projects">Projects</Link>
            </li>
            <li className="navbar_link">
                <Link className="link" to="/about">About</Link>
            </li>
            <li className="navbar_link">
                <Link className="link" to="/resume">Resume</Link>
            </li>
            <li className="navbar_link">
                <Link className="link" to="/contact">Contact Me</Link>
            </li>
        </div> 
    );
}

export default Navbar;