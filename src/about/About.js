import React from 'react';
import Header from '../header/Header';
import wave1 from "./../assets/waves/wave1.png";
import wave2 from "./../assets/waves/wave2.png";
import wave3 from "./../assets/waves/wave3.png";
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
                  <i className="fab fa-github"></i>
                </button>
                <button onClick={() => openWindow('medium')}>
                  <i className="fab fa-medium"></i>
                </button>
                <button onClick={() => openWindow('linkedin')}>
                  <i className="fab fa-linkedin"></i>
                </button>
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

export default About;