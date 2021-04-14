import { useHistory } from "react-router-dom";
import {
  makeStyles,
  Grid,
  Typography,
  IconButton,
  Tooltip,
  Chip,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import Fade from "react-reveal";
import Rotate from "react-reveal";

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    padding: theme.spacing(2),
  },
  textContainer: {
    textAlign: "center",
  },
  projectImage: {
    // boxShadow: "0px 0px 25px -2px #f50057",
    // borderRadius: "30px",
  },
  typography: {
    color: "#ADEFD1FF",
    padding: theme.spacing(1),
    fontFamily: "Averia",
  },
  projectsLinkButton: {
    color: "#ADEFD1FF",
    border: "1px solid #ADEFD1FF",
    width: 200,
    borderRadius: "50px",
    "&:hover": {
      background: "transparent",
      border: "1px solid #f50057",
      transition: "0.4s",
    },
  },
  chip: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    fontFamily: "Bebas+Neue",
    fontSize: 15,
  },
}));

interface SmallProjectsProps {
  projects: [];
}

interface Project {
  name: string;
  imageSrc: string;
  description: string;
  githubLink: string;
  writtenIn: [];
}
export default function SmallProjects(props: SmallProjectsProps) {
  const styles = useStyles();
  const history = useHistory();
  const projects = props.projects;

  return (
    <>
      <Grid
        justify="center"
        style={{ marginTop: 20, marginBottom: 8 }}
        container
        item
        xs={12}
      >
        <Typography className={styles.typography} variant="h4">
          Några av mina projekt
        </Typography>
      </Grid>
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
            {index % 2 === 0 ? (
              <>
                <Rotate top left>
                  <Grid item xs={3}>
                    <img
                      className={styles.projectImage}
                      alt=""
                      height={300}
                      width={450}
                      src={`${project.imageSrc}`}
                    ></img>
                  </Grid>
                </Rotate>
                <Grid className={styles.textContainer} container item xs={9}>
                  <Grid item xs={12}>
                    <Fade bottom>
                      <Typography className={styles.typography} variant="h5">
                        {project.name}
                      </Typography>
                    </Fade>
                  </Grid>
                  <Grid item xs={12}>
                    <Fade top>
                      <Typography className={styles.typography} variant="h6">
                        {project.description}
                      </Typography>
                    </Fade>
                  </Grid>
                  <Grid item xs={12}>
                    <Tooltip title="Länk till GitHub repo">
                      <IconButton
                        color="secondary"
                        href={`${project.githubLink}`}
                        target="_blank"
                      >
                        <GitHubIcon fontSize="large" />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                  <Grid container justify="center" item xs={12}>
                    {project.writtenIn.map((i: number) => {
                      return (
                        <>
                          <Chip
                            key={i}
                            variant="outlined"
                            className={styles.chip}
                            color="secondary"
                            label={`${i}`}
                          ></Chip>
                        </>
                      );
                    })}
                  </Grid>
                </Grid>
              </>
            ) : (
              <>
                <Grid className={styles.textContainer} container item xs={9}>
                  <Grid item xs={12}>
                    <Fade top>
                      <Typography className={styles.typography} variant="h5">
                        {project.name}
                      </Typography>
                    </Fade>
                  </Grid>
                  <Grid item xs={12}>
                    <Fade bottom>
                      <Typography className={styles.typography} variant="h6">
                        {project.description}
                      </Typography>
                    </Fade>
                  </Grid>
                  <Grid item xs={12}>
                    <Tooltip title="Länk till GitHub repo">
                      <IconButton
                        color="secondary"
                        href={`${project.githubLink}`}
                        target="_blank"
                      >
                        <GitHubIcon fontSize="large" />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                  <Grid container justify="center" item xs={12}>
                    {project.writtenIn.map((i: number) => {
                      return (
                        <>
                          <Chip
                            key={i}
                            variant="outlined"
                            className={styles.chip}
                            color="secondary"
                            label={`${i}`}
                          ></Chip>
                        </>
                      );
                    })}
                  </Grid>
                </Grid>
                <Rotate top>
                  <Grid item xs={3}>
                    <img
                      className={styles.projectImage}
                      alt=""
                      height={300}
                      width={450}
                      src={`${project.imageSrc}`}
                    ></img>
                  </Grid>
                </Rotate>
              </>
            )}
          </Grid>
        ) : null;
      })}
      <Grid justify="center" alignContent="flex-start" container item xs={12}>
        <IconButton
          className={styles.projectsLinkButton}
          onClick={() => {
            window.scroll({
              top: 0,
              behavior: "smooth",
            });
            history.push("/projects");
          }}
        >
          <Typography variant="h6">Se fler projekt</Typography>
        </IconButton>
      </Grid>
    </>
  );
}
