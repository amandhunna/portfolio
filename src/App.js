import React, { useState } from 'react';
import { Route, BrowserRouter,Switch } from 'react-router-dom'
import Main from "./home/Home";
import About from "./about/About";
import Contact from "./contact/Contact";
import resume from "./assets/Resume.pdf";
import "./App.css";

// google analytics
import "./ga";

function App() {
  const [showResume, setShowResume ] = useState(false);
  return (<>
    <button onClick={() => setShowResume(prev => !prev)} className="download-btn">CV</button>
    {!!showResume && <object className="resumeObject" data={resume} type="application/pdf">
        {/* <embed src={resume} type="application/pdf" /> */}
        <iframe src={resume}></iframe>
    </object>}
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
