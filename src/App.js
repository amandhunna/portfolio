import React from 'react';
import { Route, BrowserRouter,Switch } from 'react-router-dom'
import Main from "./home/Home";
import About from "./about/About";
import Contact from "./contact/Contact";
import resume from "./assets/Resume.pdf";
import "./App.css";

// google analytics
import "./ga";

function App() {
  return (<>
    <a
      className="download-btn"
      href={resume}
      download="resume_amanjotSinghDhunna"
      target="_blank"
      rel="noopener noreferrer"
      ><div>CV</div>
    </a>
    <div ></div>
    <object className="resumeObject" data={resume} type="application/pdf">
        {/* <embed src={resume} type="application/pdf" /> */}
        <iframe src={resume}></iframe>
    </object>
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
