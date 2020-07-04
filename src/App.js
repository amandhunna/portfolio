import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import Main from "./Main";
import "./ga";

function App() {
  return (<>
    <BrowserRouter>
      <Route path="/" component={Main} >
      </Route>
    </BrowserRouter>
  </>
  );
}
export default App;
