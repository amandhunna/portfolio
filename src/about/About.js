import React from 'react';
import Header from '../header/Header';
import './about.css';

function About() {
  const openWindow =(type) => {
    const link = {
      linkedin: "https://www.linkedin.com/in/amanjot-singh-398731131/",
      medium: "https://amanjotsinghdhunna.medium.com/",
      github: "https://github.com/amanjotsinghdhunna",
    }
    window.open(link[type]);
  }
    return (
        <>
        <Header />
        <section id="aboutMe" className="section">
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
                  <p>Linkedin</p>
                </button>
              </div>
            </div>
      </section>
      </>
    );
}

export default About;