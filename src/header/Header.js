import React from 'react';
import { HashLink as Link } from "react-router-hash-link";
import resume from "./../assets/Resume.pdf";

function Header() {
    return (
        <header className={`header`}>
        <div className="center-middle">
        <span className="mr-5">
            <Link to="/"> Home</Link>
          </span>
          <span className="mr-5">
            <Link to="/about"> About</Link>
          </span>
          <span className="mr-5">
            <Link to="/contact"> Contact</Link>
          </span>
        </div>
        <a rel="noopener noreferrer" href={resume} target="_blank" id="resume">Resume</a>
      </header>
    );
}

export default Header;