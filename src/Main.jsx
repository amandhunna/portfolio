import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import wave1 from "./waves/wave1.png";
import wave2 from "./waves/wave2.png";
import wave3 from "./waves/wave3.png";

import "./App.css";
const getColors = () => ({
  wrapper: { background: "#000" },
  one: randomColor(),
  two: randomColor(),
  three: randomColor(),
  four: randomColor(),
  five: randomColor(),
  six: randomColor(),
});

const getRecentWork = () => {
  const work = [
    {
      repoURL: "https://github.com/amanjotsinghdhunna/sos-auth-service",
      workTitle: "SOS-Auth-service",
    },
    {
      repoURL: "https://github.com/amanjotsinghdhunna/storybook",
      workTitle: "Story book",
    },
    {
      repoURL: "https://github.com/amanjotsinghdhunna/profileintro",
      workTitle: "Resume",
    },
    {
      repoURL: "https://github.com/amanjotsinghdhunna/Express",
      workTitle: "Express",
    },

    {
      repoURL: "https://github.com/amanjotsinghdhunna/Lambo",
      workTitle: "Lambo",
    },
    {
      repoURL: "https://github.com/amanjotsinghdhunna/Arduino",
      workTitle: "Arduino",
    },
  ];
  return work.map((ele) => {
    return (
      <div
        key={"myWork" + Math.random()}
        className="card"
        onClick={() => window.open(ele.repoURL)}
      >
        {ele.workTitle}
      </div>
    );
  });
};

const getRecentBlogs = () => {
  const blog = [
    {  
    repoURL:
    "https://amanjotsinghdhunna.medium.com/dynamically-add-suggestion-list-to-input-fields-b0a6e33c7e29",
    workTitle: "Dynamically add suggestion list to input fields",
    },
    {
      repoURL:
        "https://amanjotsinghdhunna.medium.com/cross-origin-communication-between-window-55369facd73",
      workTitle: "Cross-origin communication between window",
    },
    {
      repoURL:
        "https://amanjotsinghdhunna.medium.com/overwriting-and-appending-children-props-using-reactclone-4c69f88dc235",
      workTitle:
        "Overwriting and Appending children props using React.cloneElement",
    },
    {
      repoURL:
        "https://amanjotsinghdhunna.medium.com/add-console-to-the-code-fbef21e2024d",
      workTitle: "Add Console to the code",
    },
    {
      repoURL:
        "https://amanjotsinghdhunna.medium.com/string-operations-using-slice-substring-and-substr-c4364265d0a5",
      workTitle: "String operations using slice, substring and substr",
    },
    {
      repoURL: "https://amanjotsinghdhunna.medium.com/communication-76651c3019a4",
      workTitle: "Communication",
    },
  ];
  return blog.map((ele) => {
    return (
      <div
        key={"myblog" + Math.random()}
        className="card"
        onClick={() => window.open(ele.repoURL)}
      >
        {ele.workTitle}
      </div>
    );
  });
};

const scrollTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

function Main() {
  const [colors] = useState(getColors());
  const [activeClass, setActiveClass] = useState("top");
  useEffect(() => {
    window.addEventListener("scroll", function () {
      const element = document.querySelector(".banner");
      const scroll = this.scrollY;
      let activeClass = "top";
      if (scroll > element.scrollHeight) {
        activeClass = "normal";
      }
      setActiveClass(activeClass);
    });
    scrollTop();
    /* const interval = setInterval(() => {
      setColors(getColors());
    }, 2000);
    return () => clearInterval(interval); */
  }, []);
  return (
    <>
      {/* <a
        className="download-btn"
        href="https://drive.google.com/file/d/1bfcp9no13ONLMbQowGJA6iaX15uoxM4x/view?usp=sharing"
        download="resume_amanjotSingh"
      >
        <div>CV</div>
      </a> */}
      <header className={`header ${activeClass}`}>
        <div id="logo" className="center-middle" onClick={scrollTop}>
          AS
        </div>
        <div className="center-middle">
          <span className="ml-5">
            <Link to="/pathLink#portfolio">BLOGS</Link>
          </span>
          <span className="ml-5">
            <Link to="/pathLink#recentWork">WORK</Link>
          </span>
          <span className="ml-5">
            <Link to="/pathLink#aboutMe"> ABOUT</Link>
          </span>
          <span className="ml-5">
            <Link to="/pathLink#contact"> CONTACT</Link>
          </span>
        </div>
      </header>
      <section className="banner-main">
        <div className="myself">
          <div>
            <h1>Hi!</h1>
            <h2>
              I'm <em>Amanjot Singh.</em>
            </h2>
            <h2>
              I'm a full-Stack developer focused on crafting stable, clean &
              user-friendly experiences.
            </h2>
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
      <section id="aboutMe" className="section">
        <div style={colors.wrapper} className="wrapper">
          <div style={colors.one} className="one"></div>
          <div style={colors.two} className="two"></div>
          <div style={colors.three} className="three"></div>
          <div style={colors.four} className="four"></div>
          <div style={colors.five} className="five"></div>
          <div style={colors.six} className="six"></div>
          <div className="seven section">
            <div className="skillSet">
              <p>
                I'm full-stack developer with 5+ years of professional
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
          </div>
        </div>
      </section>
      <section id="portfolio" className="section">
        <h3>BLOGS</h3>
        <div className="wrapper">{getRecentBlogs()}</div>
      </section>
      <section id="recentWork" className="section">
        <h3>GITHUB SAMPLES</h3>
        <div className="wrapper">{getRecentWork()}</div>
      </section>

      <section id="contact" className="section">
        <h3>LET’S CREATE SOMETHING GREAT</h3>
        <p>
          If you like my work and have some cool project to work on, just send
          me direct message or contact me through social sites listed below.
        </p>
        {/* <a className="mailTo" href={"mailto:amandhunna.dev@gmail.com"}>
          GET IN TOUCH
        </a> */}

        <div className="links">
          <div
            onClick={() =>
              window.open("https://www.instagram.com/amandhunna.dev/")
            }
          >
            INSTAGRAM
          </div>
          <span>|</span>
           <div
            style={{cursor: 'copy'}}
            onClick={() => {navigator.clipboard.writeText('amandhunna.dev@gmail.com')}}
          >
            Gmail: amandhunna.dev@gmail.com
          </div>
          <span>|</span>
          <div
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/amandhunna-ln/", "_blank"
              )
            }
          >
            LINKEDIN
          </div>
        </div>
      </section>
      <footer className="section hide">This site is built with React.</footer>
    </>
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
