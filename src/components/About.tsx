import React, { useEffect } from "react";
import axios from "axios";
import Fade from "react-reveal";
import { makeStyles, Grid, Typography, Chip } from "@material-ui/core";
import aboutImage from "../images/about-pic.jpg";

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    height: 889,
    background: "#00203FFF",
  },
  aboutContentContainer: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(5),
  },
  image: {
    borderRadius: 50,
  },
  typography: {
    color: "#ADEFD1FF",
    fontFamily: "Bebas+Neue",
    padding: theme.spacing(1),
  },
  chip: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    fontFamily: "Bebas+Neue",
    fontSize: 20,
  },
}));

interface AboutProps {
  info: {
    firstName: string;
    lastName: string;
    description: string;
    email: string;
    profession: string;
    githubLink: string;
    schoolName: string;
    educationDescription: string;
  };
}
interface Language {
  name: string;
}
export default function About({ info }: AboutProps) {
  const styles = useStyles();
  const [languages, setLanguages] = React.useState<[]>([]);

  useEffect(() => {
    axios.get("../data/aboutMeInfo.json").then((res) => {
      setLanguages(res.data.info.education.languages ?? []);
    });
  }, []);

  return (
    <>
      <Grid className={styles.aboutContainer} container>
        <Fade>
          <Grid className={styles.aboutContentContainer} container item xs={12}>
            <Grid item xs={4} style={{ textAlign: "end", marginTop: 55 }}>
              <img
                alt=""
                className={styles.image}
                width={320}
                height={320}
                src={`${aboutImage}`}
              ></img>
            </Grid>
            <Grid container item xs={6}>
              <Grid style={{ marginLeft: 20 }} item xs={12}>
                <Typography
                  className={styles.typography}
                  style={{ marginBottom: 10 }}
                  variant="h4"
                >
                  Info om mig
                </Typography>
                <Typography className={styles.typography} variant="subtitle1">
                  {info.description}
                </Typography>
                <Grid container item xs={12} justify="flex-end">
                  <Grid item xs={12}>
                    <Typography className={styles.typography} variant="h5">
                      Mina kunskaper
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    {languages.map((language: Language, index: number) => {
                      return (
                        <Chip
                          variant="outlined"
                          color="secondary"
                          className={styles.chip}
                          key={index}
                          label={language.name}
                        />
                      );
                    })}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Fade>
      </Grid>
    </>
  );
}
