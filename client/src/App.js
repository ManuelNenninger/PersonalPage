import React from 'react';
import {
BrowserRouter as Router,
Switch,
Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import SectionHandler from "./components/SectionHandler";
import AboutSectionHandler from "./components/about/AboutSectionHandler";
import WorkSectionHandler from "./components/work/WorkSectionHandler";
import "./App.css";

function App() {


return (
<>
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/about">
        <AboutSectionHandler />
      </Route>
      <Route exact path="/work">
        <WorkSectionHandler />
      </Route>
      <Route exact path="/">
        <SectionHandler />
      </Route>
    </Switch>
  </Router>
</>
);
}
export default App;
