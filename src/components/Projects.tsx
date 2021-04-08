import {
  makeStyles,
  Grid,
  Typography,
  Tooltip,
  IconButton,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import exampleImage from "../images/exampleImage.jpg";

const useStyles = makeStyles((theme) => ({
  projectsContainer: {
    background: "#00203FFF",
  },
  typography: {
    color: "#ADEFD1FF",
    padding: theme.spacing(2),
    fontFamily: "Averia",
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
          <Grid
            alignContent="center"
            key={index}
            style={{ padding: 20 }}
            container
            item
            xs={12}
          >
            {index % 2 === 0 ? (
              <>
                <Grid item xs={3}>
                  <img
                    alt=""
                    height={250}
                    width={420}
                    src={`${exampleImage}`}
                  ></img>
                </Grid>
                <Grid container item xs={9} style={{textAlign: "left"}}>
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
                <Grid style={{ textAlign: "right" }} container item xs={9}>
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
                <Grid item xs={3}>
                  <img
                    alt=""
                    height={250}
                    width={420}
                    src={`${exampleImage}`}
                  ></img>
                </Grid>
              </>
            )}
          </Grid>
        );
      })}
    </Grid>
  );
}
