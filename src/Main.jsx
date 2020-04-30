import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDownload } from "@fortawesome/free-solid-svg-icons";
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
      repoURL: "https://github.com/amanjotsinghdhunna/profileintro",
      workTitle: "Resume",
    },
    {
      repoURL: "https://github.com/amanjotsinghdhunna/HackerChallenge",
      workTitle: "HackerChallenge",
    },
    {
      repoURL: "https://github.com/amanjotsinghdhunna/Express",
      workTitle: "Express",
    },
    {
      repoURL: "https://github.com/amanjotsinghdhunna/storybook",
      workTitle: "Story book",
    },
    {
      repoURL: "https://github.com/amanjotsinghdhunna/React-demo",
      workTitle: "React-demo",
    },
    {
      repoURL: "https://github.com/amanjotsinghdhunna/Score-keeper",
      workTitle: "Score-keeper",
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
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    /* const interval = setInterval(() => {
      setColors(getColors());
    }, 2000);
    return () => clearInterval(interval); */
  }, []);
  return (
    <>
      <a
        className="download-btn"
        href="https://drive.google.com/file/d/1l9rwarIqq6inHa-n2-kFdAiZ4Y30To6W/view?usp=sharing"
        download="resume_amanjotSingh"
      >
        {/*  <FontAwesomeIcon icon={faDownload} /> */}
        <div>CV</div>
      </a>
      <header className={`header ${activeClass}`}>
        <div className="logo"></div>
        <span>
          <Link to="/pathLink#portfolio">PORTFOLIO</Link>
        </span>
        <span>
          <Link to="/pathLink#recentWork"> RECENT WORK</Link>
        </span>
        <span>
          <Link to="/pathLink#aboutMe"> ABOUT</Link>
        </span>
        <span>
          <Link to="/pathLink#contact"> CONTACT</Link>
        </span>
      </header>
      <section className="banner-main">
        <div>
          <h1>Amanjot Singh</h1>
          <h2>
            I'm a Full-Stack developer focused on crafting stable, clean &
            user-friendly experiences.
          </h2>
        </div>
        <img className="banner" src="https://res.cloudinary.com/amanjotsingh/image/upload/v1588275013/6-li2_cf8iui-min_q8qn70.webp" alt="no src" />
      </section>
      <section id="portfolio" className="section">
        <h3>PORTFOLIO</h3>
        <p>
          Below you can see some projects I've been working on lately. I divide
          each project into four follow-up areas: comprehensive research,
          wireframing, design & development. This process allows me to create
          great product with client goals in mind.
        </p>
      </section>
      <section id="recentWork" className="section">
        <h3>RECENT WORK</h3>
        <div className="wrapper">{getRecentWork()}</div>
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
            <h3>ABOUT</h3>
            <p>
              I'm full-stack developer with 2 years of professional experience.
              I'm interested in all kinds of process in software development,
              but my major focus is on designing web, mobile & tablet
              interfaces. I also have skills in other fields like IOT.
            </p>
            <p>
              I have maintained, developed and launched multiple projects from
              scratch, carrying the development of its' back-end and front-end
              codebases.
            </p>
            <div className="skillSet">
              My current toolset includes React, Node, Mongo and all the other
              various frameworks, libraries and technologies related to them.
                I can help you with all the sides of your project:
              <ul>
                <li>verifying good UI/UX design,</li>
                <li>leading/co-developing the back-end and front-end,</li>
                <li>setting up the CI/CD,</li>
                <li>mentoring the team,</li>
                <li>estimating tasks,</li>
                <li>researching possible techs,</li>
                <li>leading, launching and monitoring the project.</li>
              </ul>
            </div>
            <p>
              Recently I became also a huge fan of one-way data flow. My current
              experience and skills in front-end includes: lead JavaScript
              development: bootstraping, refactoring, improving the structure,
              reliability, build setup; full integration of front-end
              development using tools like code minifications, multiple
              environments support, CI/CD, Storybook components library. In
              order to improve the development speed, performance and
              reliability, I have changed languages and frameworks already
              multiple times, The lessons I learned while doing all these apps
              will be useful for me forever, no matter what framework I will use
              in the next project. What I can do for you at that side is: lead
              development.
            </p>

            <p>
              Splitting the back-end into microservices, cooperation with APIs,
              remote data synchronizations, in cases where a good Project
              Manager was missing, fullfilling his role, in order to save the
              project from losing time on unneeded things. If your initial
              thought is that I can’t be the best in everything, it's okay. Send
              the design job to someone else, and I will take care of all the
              code development, or whatever other role you see me best in. In
              cases when you already have an existing team, but you would still
              use some help, contact me as well. I’ll fit in very quickly, I
              promise.
            </p>
          </div>
        </div>
      </section>
      <section id="contact" className="section">
        <h3>OK, LET’S CREATE SOMETHING GREAT</h3>
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
              window.open("https://www.instagram.com/singh_amanjot.code/")
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
