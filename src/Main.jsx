import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./App.css";

const getColors = () => ({
  wrapper: randomColor(),
  one: randomColor(),
  two: randomColor(),
  three: randomColor(),
  four: randomColor(),
  five: randomColor(),
  six: randomColor(),
});

function Main() {
  const [colors, setColors] = useState(getColors());
  const [activeClass, setActiveClass] = useState("top");

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const element = document.querySelector(".banner");
      const scroll = this.scrollY;
      console.log(scroll, element.scrollHeight);
      let activeClass = "top";
      if (scroll > element.scrollHeight) {
        activeClass = "normal";
      }
      setActiveClass(activeClass);
    });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    const interval = setInterval(() => {
      setColors(getColors());
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
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
        <img className="banner" src="/landingImage.jpg" alt="no src" />
      </section>

      <section id="portfolio" className="portfolio-desc">
        <h3>PORTFOLIO</h3>
        <p>
          Below you can see some projects I've been working on lately. I divide
          each project into four follow-up areas: comprehensive research,
          wireframing, design & development. This process allows me to create
          great product with client goals in mind.
        </p>
      </section>

      <section id="aboutMe" className="about-me">
        <div style={colors.wrapper} class="wrapper">
          <div style={colors.one} class="one"></div>
          <div style={colors.two} class="two"></div>
          <div style={colors.three} class="three"></div>
          <div style={colors.four} class="four"></div>
          <div style={colors.five} class="five"></div>
          <div style={colors.six} class="six"></div>
          <div class="seven">
            <h3>About me</h3>
            <p>
              I'm full-stack developer with 2 years of professional experience.
              I'm interested in all kinds of process in software development,
              but my major focus is on designing web, mobile & tablet
              interfaces. I also have skills in other fields like branding, icon
              design or web development.
            </p>
          </div>
        </div>
      </section>
      <section id="contact">
        <h3>OK, LET’S CREATE SOMETHING GREAT</h3>
        <p>
          If you like my work and have some cool project to work on, just send
          me direct message or contact me through social sites listed below.
        </p>
        <button>GET IN TOUCH</button>
        <div className="links">
          <div
            onClick={() => window.open(
              "https://www.instagram.com/singh_amanjot.code/"
            )}
          >
            INSTAGRAM
          </div>
          <span>|</span>
          <div
            onClick={() => window.open(
              "https://www.linkedin.com/in/amanjot-singh-398731131/"
            )}
          >
            LINKEDIN
          </div>
        </div>
      </section>
      <footer>This site was built with React.</footer>
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
