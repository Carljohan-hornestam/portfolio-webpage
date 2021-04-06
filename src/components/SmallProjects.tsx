import {
  makeStyles,
  Grid,
  Typography,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import Fade from "react-reveal";
import Rotate from "react-reveal";
import exampleImage from "../images/exampleImage.jpg";

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    padding: theme.spacing(2),
  },
  textContainer: {
    textAlign: "center",
  },
  projectImage: {
    boxShadow: "0px 0px 25px -2px #f50057",
    borderRadius: "30px",
  },
  typography: {
    color: "#ADEFD1FF",
    padding: theme.spacing(2),
    fontFamily: "Averia",
    // textAlign: "center"
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
            {index % 2 === 0 ? (
              <>
                <Rotate top left>
                  <Grid item xs={3}>
                    <img
                      className={styles.projectImage}
                      alt=""
                      height={250}
                      width={420}
                      src={`${exampleImage}`}
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
                </Grid>
                <Rotate bottom>
                  <Grid item xs={3}>
                    <img
                      className={styles.projectImage}
                      alt=""
                      height={250}
                      width={420}
                      src={`${exampleImage}`}
                    ></img>
                  </Grid>
                </Rotate>
              </>
            )}
          </Grid>
        ) : null;
      })}
    </>
  );
}
