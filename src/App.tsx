import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Grid, makeStyles } from "@material-ui/core";
import Fade from "react-reveal";
import axios from "axios";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import profileImage from "./images/profile-pic.jpg";
import bgImage from "./images/main.jpg";
import InfoBox from "./components/InfoBox";
import SmallAbout from "./components/SmallAbout";
import SmallProjects from "./components/SmallProjects";
import { projects1 } from "./data2/projects1.js";

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    height: 650,
    background: "#00203FFF",
    // backgroundImage: `url(${bgImage})`
  },
  homeContentContainer: {},
  infoBoxContainer: {
    maxWidth: 350,
    height: 200,
    marginTop: theme.spacing(3),
    marginRight: theme.spacing(2),
  },
  profileImage: {
    borderRadius: "30px",
    boxShadow: "0px 0px 25px -2px #ADEFD1FF",
  },
  smallAboutContainer: {
    background: "#ADEFD1FF",
    height: 500,
  },
  smallProjectsContainer: {
    // backgroundImage: `url(${bgImage})`,
    background: "#00203FFF",
    height: 850,
  },
}));

const App: React.FC = () => {
  const [routes, setRoutes] = useState<[]>([]);
  const [projects, setProjects] = useState<any>([]);
  const [info, setInfo] = useState<any>({});
  const styles = useStyles();

  useEffect(() => {
    axios
      .get("/data/routes.json")
      .then((res) => {
        setRoutes(res.data.routes ?? []);
      })
      .then(() => {
        axios.get("/data/aboutMeInfo.json").then((res) => {
          const info = {
            firstName: res.data.info.firstName ?? "",
            lastName: res.data.info.lastName ?? "",
            email: res.data.info.email ?? "",
            description: res.data.info.description ?? "",
            profession: res.data.info.profession ?? "",
            githubLink: res.data.info.githubLink ?? "",
            educationName: res.data.info.education.educationName ?? "",
            schoolName: res.data.info.education.schoolName ?? "",
            educationDescription:
              res.data.info.education.educationDescription ?? "",
          };
          setInfo(info);
          setProjects(projects1);
        });
      });
  }, []);

  function renderHome() {
    return (
      <>
        <Grid className={styles.homeContainer} container>
          <Grid
            className={styles.homeContentContainer}
            justify="center"
            alignContent="center"
            container
            item
            xs={12}
          >
            <Grid className={styles.infoBoxContainer} container item>
              <Fade right>
                <InfoBox
                  info={{
                    firstName: info.firstName,
                    lastName: info.lastName,
                    email: info.email,
                    profession: info.profession,
                    githubLink: info.githubLink,
                  }}
                />
              </Fade>
            </Grid>
            <Grid item>
              <Fade left>
                <img
                  className={styles.profileImage}
                  alt=""
                  src={`${profileImage}`}
                ></img>
              </Fade>
            </Grid>
          </Grid>
        </Grid>
        <Grid container className={styles.smallAboutContainer}>
          <SmallAbout />
        </Grid>
        <Grid container className={styles.smallProjectsContainer}>
          <SmallProjects projects={projects} />
        </Grid>
      </>
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
            <About
              info={{
                firstName: info.firstName,
                lastName: info.lastName,
                description: info.description,
                email: info.email,
                profession: info.profession,
                githubLink: info.githubLink,
                schoolName: info.schoolName,
                educationDescription: info.educationDescription,
              }}
            />
          </Route>
          <Route path="/projects">
            <Projects projects={projects} />
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
