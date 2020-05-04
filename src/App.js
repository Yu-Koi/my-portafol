import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route path="/contact">{Contact}</Route>
          <Route path="/skills">{Skills}</Route>
          <Route path="/projects">{Projects}</Route>
          <Route path="/about">{AboutMe}</Route>
          <Route path="/" exact>
            {Home}
          </Route>
        </Switch>
        {/* <Carrusell/> */}
      </div>
    </Router>
  );
}

export default App;
