import {
  makeStyles,
  Grid,
} from "@material-ui/core";
import LeftProject from "./LeftProject";
import RightProject from "./RightProject";
import Fade from "react-reveal";

const useStyles = makeStyles((theme) => ({
  projectsContainer: {
    background: "#00203FFF",
    padding: theme.spacing(2),
  },
  typography: {
    color: "#ADEFD1FF",
    padding: theme.spacing(1),
    fontFamily: "Bebas+Neue",
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
  images: [];
}

export default function Projects(props: ProjectsProps) {
  const styles = useStyles();
  
  return (
    <Fade>
    <Grid container className={styles.projectsContainer}>
      {props.projects.map((project: Project, index: number) => {
        console.log('project.images:', project.images);
        
        return (
          <Grid
            alignContent="center"
            style={{ borderBottom: "2px solid #ADEFD1FF", padding: 8 }}
            key={index}
            container
            item
            xs={12}
          >
            {index % 2 === 0 ? (
              
              <LeftProject
                projectName={project.name}
                description={project.description}
                githubLink={project.githubLink}
                imageSrc={project.imageSrc}
                images={project.images}
                writtenIn={project.writtenIn}
              />
            ) : (
              <RightProject
                projectName={project.name}
                description={project.description}
                githubLink={project.githubLink}
                imageSrc={project.imageSrc}
                images={project.images}
                writtenIn={project.writtenIn}
              />
            )}
          </Grid>
        );
      })}
    </Grid>
    </Fade>
  );
}
