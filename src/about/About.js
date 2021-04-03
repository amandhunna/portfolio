import React, {useState, useEffect } from 'react';
import Header from '../header/Header';

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
      const randomGenerator = randomColor[Math.ceil(Math.random() * 10) -1 ];
      return randomGenerator;
    };
    return { background: getDefaultColor() };
};
const randomGrid = () => {
        const defaultGridClasses = [ 'one', 'two', 'three', 'four', 'five', 'six' ];
        const randomGenerator = Math.ceil(Math.random() * 10)%6;
        return defaultGridClasses[randomGenerator];
}

const getColors = () => ({
    wrapper: { background: "#000" },
    one: randomColor(),
    two: randomColor(),
    three: randomColor(),
    four: randomColor(),
    five: randomColor(),
    six: randomColor(),
  });

const getGrid =() => ({
    one: randomGrid(),
    two: randomGrid(),
    three: randomGrid(),
    four: randomGrid(),
    five: randomGrid(),
    six: randomGrid(),
});

function About(props) {
    const [ colors, setColors ] = useState(getColors());
    const [grid, setGrid ] =useState(getGrid())
    useEffect(() => {
        const interval = setInterval(() => {
          setColors(getColors());
          setGrid(getGrid());
        }, 1000);
        return () => clearInterval(interval);
      }, []);
    return (
        <>
        <Header />
        <section id="aboutMe" className="section">
        <div style={colors.wrapper} className="wrapper">
          <div style={colors.one} className={grid.one}></div>
          <div style={colors.two} className={grid.two}></div>
          <div style={colors.three} className={grid.three}></div>
          <div style={colors.four} className={grid.four}></div>
          <div style={colors.five} className={grid.five}></div>
          <div style={colors.six} className={grid.six}></div>
          <div className="seven section">
            <h3>ABOUT</h3>
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
          </div>
        </div>
      </section>
      </>
    );
}

export default About;