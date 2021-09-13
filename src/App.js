import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'
import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Connect from "./Components/Connect";


function App() {
  
  return (
    <>
    <Router>
    <Route path="/" component={Header}/>
    <Route path="/About" component={About}/>
    <Route path="/Projects" component={Projects}/>
    <Route path="/Connect" component={Connect}/>
    <Route path="/Skills" component={Skills}/>
    </Router>
    </>
  );
}

export default App;
