import React, { useState } from 'react';
import { Route, BrowserRouter,Switch } from 'react-router-dom'
import Main from "./home/Home";
import About from "./about/About";
import Contact from "./contact/Contact";

import "./App.css";

// google analytics
import "./ga";

function App() {
  return (<>
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
