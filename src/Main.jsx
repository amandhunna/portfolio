import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { PersonalInfo, Summary, Skills, Experience} from "./formatData"
// import "./App.css";
import "./index.css"


function Main() {
  return (
<>
<header>
        {/* <h1>Amanjot Singh's Resume</h1> */}
    </header>
    <div className="container">
      <PersonalInfo />
      <Summary />
      <Skills />

      <Experience />


        <section id="education">
            {/* <!-- Education will be populated here --> */}
        </section>

        <section id="hobbies">
            {/* <!-- Hobbies will be populated here --> */}
        </section>

        <section id="projects">
          
        </section>

        <section id="socialMedia">
          
        </section>
    </div></>
  );
}

const randomColor = () => {
  const getDefaultColor = () => {
    const randomColor = [
      "#52BF84",
      "#FEB957",
      "#DD615D",
      "#EF7DD0",
      "#59C1F4",
      "#F0638E",
      "#1AABA2",
      "#5F7AE8",
      "#FD7554",
      "#9D83F4",
    ];
    const randomGenerator = randomColor[Math.ceil(Math.random() * 10) - 1];
    return randomGenerator;
  };
  return { background: getDefaultColor() };
};
export default Main;
