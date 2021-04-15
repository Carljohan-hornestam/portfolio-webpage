import { useHistory } from "react-router-dom";
import {
  makeStyles,
  Grid,
  IconButton,
  Typography,
  Button,
  Tooltip,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  text: {
    color: "#ADEFD1FF",
    fontFamily: "Averia",
  },
  textGrid: {
    padding: theme.spacing(1),
  },
  contactButton: {
    color: "#ADEFD1FF",
    fontFamily: "Bebas+Neue",
    border: "2px solid #ADEFD1FF",
  },
}));

interface InfoProps {
  info: {
    firstName: string;
    lastName: string;
    email: string;
    profession: string;
    githubLink: string;
  };
}

export default function InfoBox({ info }: InfoProps) {
  const styles = useStyles();
  const history = useHistory();

  return (
    <>
      <Grid className={styles.textGrid} item xs={12}>
        <Typography className={styles.text} variant="h4">
          {info.firstName} {info.lastName}
        </Typography>
      </Grid>
      <Grid className={styles.textGrid} item xs={12}>
        <Typography className={styles.text} variant="h6">
          {info.profession}
        </Typography>
      </Grid>
      <Grid className={styles.textGrid} item xs={12}>
        <Button
          className={styles.contactButton}
          onClick={() => history.push("/contact")}
        >
          Kontakt
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Tooltip title="Klicka här för att komma till min GitHub">
          <IconButton
            color="secondary"
            href={`${info.githubLink}`}
            target="_blank"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </Grid>
    </>
  );
}
