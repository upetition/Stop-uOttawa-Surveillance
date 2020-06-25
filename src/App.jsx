import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./components/Home/Home";

import Privacy from "./components/Privacy/Privacy";

import Petition from "./components/Petition/Petition";

import Verify from "./components/Verify/Verify";

//TODO Web Template Studio: Add routes for your new pages here.
const App = () => {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path = "/" component = { Home } />
          <Route path = "/verify" component = { Verify } />
          <Route path = "/Privacy" component = { Privacy } />
          <Route path = "/Petition" component = { Petition } />
        </Switch>
        <Footer />
      </React.Fragment>
    );
}

export default App;
