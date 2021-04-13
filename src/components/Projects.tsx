import React from "react";
import {
  makeStyles,
  Grid,
  Typography,
  Tooltip,
  IconButton,
  Chip,
  Dialog,
  DialogContent,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LeftProject from "./LeftProject";
import RightProject from "./RightProject";

const useStyles = makeStyles((theme) => ({
  projectsContainer: {
    background: "#00203FFF",
    padding: theme.spacing(2),
  },
  typography: {
    color: "#ADEFD1FF",
    padding: theme.spacing(1),
    fontFamily: "Averia",
    textAlign: "center",
  },
  chip: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    fontFamily: "Bebas+Neue",
    fontSize: 15,
  },
}));

interface ProjectsProps {
  projects: [];
}
interface Project {
  name: string;
  description: string;
  githubLink: string;
  imageSrc: string;
  writtenIn: [];
}

export default function Projects(props: ProjectsProps) {
  const styles = useStyles();

  return (
    <Grid container className={styles.projectsContainer}>
      {props.projects.map((project: Project, index: number) => {
        return (
          <Grid alignContent="center" key={index} container item xs={12}>
            {index % 2 === 0 ? (
              <LeftProject
                projectName={project.name}
                description={project.description}
                githubLink={project.githubLink}
                imageSrc={project.imageSrc}
                writtenIn={project.writtenIn}
              />
            ) : (
              //   <>
              //     <Grid item xs={3}>
              //       <img
              //         onClick={() => handleModal(true)}
              //         alt=""
              //         height={300}
              //         width={450}
              //         src={`${project.imageSrc}`}
              //       ></img>
              //     </Grid>
              //     <Grid container item xs={9}>
              //       <Grid item xs={12}>
              //         <Typography className={styles.typography} variant="h5">
              //           {project.name}
              //         </Typography>
              //       </Grid>
              //       <Grid item xs={12}>
              //         <Typography className={styles.typography} variant="h6">
              //           {project.description}
              //         </Typography>
              //       </Grid>
              //       <Grid container item xs={12} justify="center">
              //         <Tooltip title="Länk till GitHub repo">
              //           <IconButton
              //             color="secondary"
              //             href={`${project.githubLink}`}
              //             target="_blank"
              //           >
              //             <GitHubIcon fontSize="large" />
              //           </IconButton>
              //         </Tooltip>
              //       </Grid>
              //       <Grid container justify="center" item xs={12}>
              //         {project.writtenIn.map((i: number) => {
              //           return (
              //             <>
              //               <Chip
              //                 key={i}
              //                 variant="outlined"
              //                 className={styles.chip}
              //                 color="secondary"
              //                 label={`${i}`}
              //               ></Chip>
              //             </>
              //           );
              //         })}
              //       </Grid>
              //     </Grid>
              //   </>
              // ) : (

              <RightProject
                projectName={project.name}
                description={project.description}
                githubLink={project.githubLink}
                imageSrc={project.imageSrc}
                writtenIn={project.writtenIn}
              />
            )}
          </Grid>
        );
      })}
    </Grid>
  );
}
