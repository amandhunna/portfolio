import React,  { useState, useEffect, useRef } from 'react';
import Header from '../header/Header';
import Clouds from 'vanta/dist/vanta.rings.min';
import './about.css';

function About() {
  const openWindow =(type) => {
    const link = {
      linkedin: "https://www.linkedin.com/in/amandhunna-ln/",
      medium: "https://amandhunna.medium.com/",
      github: "https://github.com/amandhunna",
    }
    window.open(link[type]);
  }

/* 
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
 */

    return (
        <>
        <Header />
        <section id="aboutMe" className="section"  >
            <h1 className="underline">ABOUT</h1>
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
              <div className="aboutWork" onClick={() => openWindow('github')}>
                <button>
                  <i class="fab fa-github"></i>
                  <p>GitHub</p>
                </button>
                <button onClick={() => openWindow('medium')}>
                  <i class="fab fa-medium"></i>
                  <p>Medium</p>
                </button>
                <button onClick={() => openWindow('linkedin')}>
                  <i class="fab fa-linkedin"></i>
                  <p>Medium</p>
                </button>
              </div>
            </div>
      </section>
      </>
    );
}

export default About;