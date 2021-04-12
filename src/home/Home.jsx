import React, { useState, useEffect, useRef } from "react";
import Header from "../header/Header";
import wave1 from "./waves/wave1.png";
import wave2 from "./waves/wave2.png";
import wave3 from "./waves/wave3.png";
import Clouds from 'vanta/dist/vanta.clouds.min';
import './home.css';

function Home() {
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

  return (
    <>
     {/*  <Header /> */}
      <section className="banner-main" ref={myRef}>
        <div className="myself">
          <div>
            <h3>Hi!</h3>
            <h1>
              I'm <em>Amanjot Singh.</em>
            </h1>
            <h2>
              I'm a MERN Stack developer focused on crafting stable, clean &
              user-friendly experiences.
            </h2>
            <button className="btn-knowMore">Know more</button>
          </div>
        </div>
        { false && <div className="banner banner-waves">
          <div className="line line-1">
            <img className="wave wave1" src={wave1} alt="no src" />
          </div>
          <div className="line line-2">
            <img className="wave wave2" src={wave2} alt="no src" />
          </div>
          <div className="line line-3">
            <img className="wave wave3" src={wave3} alt="no src" />
          </div>
        </div>}
      </section>
    </>
  );
}


export default Home;
