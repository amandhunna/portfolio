import React, { useState } from 'react';
import { HashLink as Link } from "react-router-hash-link";
import resume from "./../assets/Resume.pdf";

function Header() {
  const [ showResume, setShowResume ] = useState(false);
    return (
        <header className={`header`}>
        <div className="center-middle">
        <span className="ml-5">
            <Link to="/"> Home</Link>
          </span>
          <span className="ml-5">
            <Link to="/about"> About</Link>
          </span>
          <span className="ml-5">
            <Link to="/contact"> Contact</Link>
          </span>
        </div>
        <button id="resume" onClick={() => setShowResume(prev => !prev)} >Resume</button>
        {!!showResume && 
          <object className="resumeObject" data={resume} type="application/pdf">
            {/* <embed src={resume} type="application/pdf" /> */}
            <iframe src={resume}></iframe>
        </object>}
      </header>
    );
}

export default Header;