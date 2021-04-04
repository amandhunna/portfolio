import React from "react";
import Header from "../header/Header";
import wave1 from "./waves/wave1.png";
import wave2 from "./waves/wave2.png";
import wave3 from "./waves/wave3.png";

import './home.css';

function Home() {

  return (
    <>
      <Header />
      <section className="banner-main">
        <div className="myself">
          <div>
            <h3>Hi!</h3>
            <h1>
              I'm <em>Amanjot Singh.</em>
            </h1>
            <h2>
              I'm a <em>MERN Stack</em> developer focused on crafting stable, clean &
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
      <section id="portfolio" className="section hide">
        <h3>BLOGS</h3>
        <div className="wrapper">{/* {getRecentBlogs() */}</div>
      </section>
      <section id="recentWork" className="section hide">
        <h3>WORK</h3>
        <div className="wrapper">{/* getRecentWork() */}</div>
      </section>

    </>
  );
}


export default Home;
