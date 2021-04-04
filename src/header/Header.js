import React, { useState, useEffect } from 'react';
import { HashLink as Link } from "react-router-hash-link";
/* 
// depreciated
const scrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
 */
function Header() {
    const [activeClass/* , setActiveClass */] = useState("top");
    useEffect(() => {
        /*    
        // depreciated
        window.addEventListener("scroll", function () {
            const element = document.querySelector(".banner");
            const scroll = this.scrollY;
            let activeClass = "top";
            if (scroll > element.scrollHeight) {
              activeClass = "normal";
            }
            setActiveClass(activeClass);
        });
        scrollTop(); */
    }, []);

    return (
        <header className={`header ${activeClass}`}>
        <div id="logo" className="center-middle" /*onClick={scrollTop}*/>
          AS
        </div>
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
      </header>
    );
}

export default Header;