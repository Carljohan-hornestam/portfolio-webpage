import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Grid, makeStyles } from "@material-ui/core";
import axios from "axios";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import profileImage from "./images/profile-pic.jpg";
import InfoBox from "./components/InfoBox";

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    height: 600,
    background: "#00203FFF",
  },
  homeContentContainer: {
    marginTop: theme.spacing(10)
  },
  infoBoxContainer: {
    // border: "2px solid white",
    // background: "white",
    // boxShadow: "inset 0 0 5px 5px #557A95",
    maxWidth: 300,
    height: 200,
    marginTop: theme.spacing(5),
    marginRight: theme.spacing(2)
  },
  pp: {
    borderRadius: "50px",
  },
}));

const App: React.FC = () => {
  const [routes, setRoutes] = useState<[]>([]);
  const [infoBoxInfo, setInfoBoxInfo] = useState<any>({});
  const styles = useStyles();  

  useEffect(() => {
    axios
      .get("/data/routes.json")
      .then((res) => {
        setRoutes(res.data.routes);
      })
      .then(() => {
        axios.get("/data/infoBoxInfo.json").then((res) => {
          const info = {
            firstName: res.data.info.firstName?? "",
            lastName: res.data.info.lastName?? "",
            profession: res.data.info.profession?? "",
            githubLink: res.data.info.githubLink?? ""
          };
          setInfoBoxInfo(info);
        });
      });
  }, []);

  function renderHome() {
    return (
      <Grid className={styles.homeContainer}  container>
        <Grid className={styles.homeContentContainer} justify="center" container item xs={12}>
          <Grid className={styles.infoBoxContainer} container item>
           <InfoBox info={{
             firstName: infoBoxInfo.firstName,
             lastName: infoBoxInfo.lastName,
             profession: infoBoxInfo.profession,
             githubLink: infoBoxInfo.githubLink
           }}/>
          </Grid>
          <Grid item>
            <img className={styles.pp} src={`${profileImage}`}></img>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  return (
    <>
      <BrowserRouter>
        <Header routes={routes} />
        <Switch>
          <Route exact path="/">
            {renderHome()}
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
