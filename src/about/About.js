import React, { useState, useEffect, useRef } from "react";
import Header from '../header/Header';
import Clouds from 'vanta/dist/vanta.clouds.min';
import './about.css';

function About() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  const openWindow =(type) => {
    const link = {
      linkedin: "https://www.linkedin.com/in/amandhunna-ln/",
      medium: "https://amandhunna.medium.com/",
      github: "https://github.com/amandhunna",
    }
    return link[type]
  }

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
        <section  className="section aboutMe"  ref={myRef} >
          <div id="move">
            <h1 className="underline">About</h1>
            <div className="skillSet">
              <h2>
                I'm full-stack developer with <em>2.5 years</em> of professional
                experience. I also have interest in other fields like IOT.
              </h2>
              <p>
                I have maintained and developed multiple projects from scratch,
                carrying the development of its' back-end and front-end
                codebases.
              </p>
              <h2>My current toolset includes <em>React, Node, Mongo</em> and all the other
              various frameworks, libraries and technologies related to them.
              </h2>
              <p className="responsibilities">I can help you with all the sides of your project</p>
              <ul>
                <li>Leading/co-developing the back-end and front-end</li>
                <li>Estimating tasks</li>
                <li>Researching possible techs</li>
                <li>Leading, launching and monitoring the project</li>
              </ul>
              <div className="aboutWork">
                <a href={openWindow('medium')}  target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-medium"></i>
                </a>
                <a href={openWindow('github')} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href={openWindow('linkedin')}  target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            </div>
      </section>
      </>
    );
}

export default About;