import React from 'react';
import { Route, BrowserRouter,Switch } from 'react-router-dom'
import Main from "./home/Home";
import About from "./about/About";
import Contact from "./contact/Contact";
import "./App.css";

// google analytics
import "./ga";

function App() {
  return (<>
    <a
      className="download-btn"
      href="https://drive.google.com/file/d/1bfcp9no13ONLMbQowGJA6iaX15uoxM4x/view?usp=sharing"
      download="resume_amanjotSingh"
      ><div>CV</div>
    </a>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  </>
  );
}
export default App;
