import React from "react";
import { makeStyles, Grid, Typography, IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import exampleImage from "../images/exampleImage.jpg";

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    padding: theme.spacing(2),
  },
  projectImage: {
    boxShadow: "0px 0px 25px -2px #f50057",  
    borderRadius: "30px"
  },
  typography: {
    color: "#ADEFD1FF",
    padding: theme.spacing(2),
    fontFamily: "Averia",
  },
}));

interface SmallProjectsProps {
  projects: [];
}

interface Project {
  name: string;
  imageLink: string;
  description: string;
  githubLink: string;
}
export default function SmallProjects(props: SmallProjectsProps) {
  const styles = useStyles();
  const projects = props.projects;

  return (
    <>
      {projects.map((project: Project, index: number) => {
        return index < 2 ? (
          <Grid
            className={styles.contentContainer}
            alignContent="center"
            key={index}
            container
            item
            xs={12}
          >
            <Grid item xs={3}>
              <img
                className={styles.projectImage}
                alt=""
                height={250}
                width={420}
                src={`${exampleImage}`}
              ></img>
            </Grid>
            <Grid container item xs={9}>
              <Grid item xs={12}>
                <Typography className={styles.typography} variant="h5">
                  {project.name}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className={styles.typography} variant="h6">
                  {project.description}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <IconButton
                  color="secondary"
                  href={`${project.githubLink}`}
                  target="_blank"
                >
                  <GitHubIcon fontSize="large" />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        ) : null;
      })}
    </>
  );
}
