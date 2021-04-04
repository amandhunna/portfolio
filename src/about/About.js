import React from 'react';
import Header from '../header/Header';
import './about.css';

function About() {
   
    return (
        <>
        <Header />
        <section id="aboutMe" className="section">
            <h3 className="underline">ABOUT</h3>
            <div className="skillSet">
              <p>
                I'm full-stack developer with 2.5 years of professional
                experience. I also have interest in other fields like IOT.
              </p>
              <p>
                I have maintained and developed multiple projects from scratch,
                carrying the development of its' back-end and front-end
                codebases.
              </p>
              My current toolset includes React, Node, Mongo and all the other
              various frameworks, libraries and technologies related to them. I
              can help you with all the sides of your project:
              <ul>
                <li>Leading/co-developing the back-end and front-end</li>
                <li>Estimating tasks</li>
                <li>Researching possible techs</li>
                <li>Leading, launching and monitoring the project</li>
              </ul>
            </div>
      </section>
      </>
    );
}

export default About;