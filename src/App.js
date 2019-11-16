import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Navbar from "./components/layout/Navbar";

import "./styles/css/bootstrap/bootstrap.css";
import "./styles/css/style.css";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </div>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
