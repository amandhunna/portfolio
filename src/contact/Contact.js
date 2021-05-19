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
        <div id='move' >
            <h3 id='contact-h3'>LET’S CREATE SOMETHING GREAT</h3>
            <p>
              If you like my work and have some cool project to work on, just send
              me direct message or contact me through social sites listed below.
            </p>
            <a className="mailTo" href={"mailto:amandhunna.dev@gmail.com"}>
                GET IN TOUCH
            </a>

            <div className="links">
              <a rel="noopener noreferrer" href={"https://www.instagram.com/amandhunna.dev/"} target="_blank">
                INSTAGRAM
              </a>
              <span>|</span>
              <a rel="noopener noreferrer" href={"https://www.linkedin.com/in/amandhunna-ln/"} target="_blank">
                LINKEDIN
              </a>
            </div>
            </div>
      </section>
      </>
    );
}

export default Contact;