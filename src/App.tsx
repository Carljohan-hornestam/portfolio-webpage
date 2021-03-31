import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App: React.FC = () => {
  const [routes, setRoutes] = useState<[]>([]);

  useEffect(() => {
    axios.get("/data/routes.json").then((res) => {
      setRoutes(res.data.routes);
    });
  }, []);

  function renderHome() {
    return (
      <div>HEMMA</div>
    )
  }

  return (
    <>
    <BrowserRouter>
    <Header routes={routes}/>
        <Switch>
          <Route exact path="/">
            {renderHome()}
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
        </Switch>
    </BrowserRouter>
    </>
  );
};

export default App;
