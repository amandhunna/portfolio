import React, { useState, useEffect, useRef } from "react";
import Header from '../header/Header';
import Clouds from 'vanta/dist/vanta.clouds.min';
import './contact.css';

function Contact(props) {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(Clouds({
        el: myRef.current
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect]);


    return (
        <>
        <Header />
        <section id="contact" className="section" ref={myRef}>
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
      </section>
      </>
    );
}

export default Contact;