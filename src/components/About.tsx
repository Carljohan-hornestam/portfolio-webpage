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
    fontSize: 18
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
            <Grid item xs={4} style={{ textAlign: "end", marginTop: 30 }}>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  velit labore, totam quos accusamus autem ab dignissimos
                  exercitationem unde corrupti assumenda quo mollitia aut
                  veritatis iure sit neque quasi ipsum excepturi ipsam
                  asperiores odio! Eaque voluptatibus perferendis aut corrupti
                  possimus illo cum vero minima quasi dolores. Totam consequatur
                  soluta fugiat neque. Commodi, modi iste incidunt quam neque
                  asperiores aperiam explicabo laboriosam nihil unde ad cum
                  mollitia labore maiores ipsa vitae! Deleniti aut quam voluptas
                  odit repellat laudantium architecto minima, harum nobis
                  aperiam nihil commodi est mollitia, perspiciatis eveniet
                  quisquam aspernatur nesciunt corporis? Corporis perferendis
                  cum, molestias esse earum veniam. Accusamus.
                </Typography>
                <Grid container item xs={12} justify="flex-end">
                  <Grid item xs={12}>
                    {languages &&
                      languages.map((language: Language, index: number) => {
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
