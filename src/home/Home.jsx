import React, { useState, useEffect, useRef } from "react";
import Clouds from 'vanta/dist/vanta.clouds.min';
import './home.css';

function Home(props) {
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
     <div class="ballContainer">
     </div>
      <section className="banner-main" ref={myRef}>
        <div className="myself" id="moveHome">
          <div>
            <h3>Hi!</h3>
            <h1>
              I'm <em>Amanjot Singh.</em>
            </h1>
            <h2>
              I'm a MERN Stack developer focused on crafting stable, clean &
              user-friendly experiences.
            </h2>
            <button className="btn-knowMore" onClick={() => props.history.push('/about')}>Know more  </button>
          </div>
        </div>
      </section>
    </>
  );
}


export default Home;
