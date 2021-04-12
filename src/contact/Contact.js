import React from 'react';
import wave1 from "./../assets/waves/wave1.png";
import wave2 from "./../assets/waves/wave2.png";
import wave3 from "./../assets/waves/wave3.png";
import Header from "../header/Header";
import './contact.css';

function Contact(props) {
    return (
        <>
        <Header />
        <section id="contact" className="section">
            <h3>LET’S CREATE SOMETHING GREAT</h3>
            <p>
              If you like my work and have some cool project to work on, just send
              me direct message or contact me through social sites listed below.
            </p>
            <a className="mailTo" href={"mailto:amanjotsingh260@gmail.com"}>
                GET IN TOUCH
            </a>

            <div className="links">
              <div
                onClick={() =>
                  window.open("https://www.instagram.com/amanjotsinghdhunna/")
                }
              >
                INSTAGRAM
              </div>
              <span>|</span>
              <div
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/amanjot-singh-398731131/"
                  )
                }
              >
                LINKEDIN
              </div>
            </div>
            <div className="banner banner-waves">
          <div className="line line-1">
            <img className="wave wave1" src={wave1} alt="no src" />
          </div>
          <div className="line line-2">
            <img className="wave wave2" src={wave2} alt="no src" />
          </div>
          <div className="line line-3">
            <img className="wave wave3" src={wave3} alt="no src" />
          </div>
        </div>
      </section>
      </>
    );
}

export default Contact;