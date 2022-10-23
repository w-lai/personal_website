import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
       <div className="Navbar">
            <li className="navbar_link">
                <Link className="link" to="/personal_website/">Home</Link>
            </li>
            <li className="navbar_link">
                <Link className="link" to="/personal_website/projects">Projects</Link>
            </li>
            <li className="navbar_link">
                <Link className="link" to="/personal_website/about">About</Link>
            </li>
            <li className="navbar_link">
                <Link className="link" to="/personal_website/resume">Resume</Link>
            </li>
            <li className="navbar_link">
                <Link className="link" to="/personal_website/contact">Contact Me</Link>
            </li>
        </div> 
    );
}

export default Navbar;