import {
  makeStyles,
  Grid,
  Typography,
  Chip,
  IconButton,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PhoneIcon from "@material-ui/icons/Phone";
import { FaDiscord } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    backgroundColor: "#00203FFF",
    height: 889,
  },
  typography: {
    color: "#ADEFD1FF",
  },
  chip: {
    padding: theme.spacing(3),
    margin: theme.spacing(1),
    fontSize: 20,
    color: "#00203FFF",
  },
}));

const Contact: React.FC = () => {
  const styles = useStyles();

  return (
    <Grid container className={styles.contactContainer}>
      <Grid container item xs={12} alignContent="center" spacing={4}>
        <Grid style={{ textAlign: "center" }} item xs={12}>
          <Typography variant="h3" className={styles.typography}>
            Kontakta mig
          </Typography>
        </Grid>
        <Grid style={{ textAlign: "center" }} item xs={12}>
          <Typography variant="h5" className={styles.typography}>
            Ni är välkomna att kontakta mig på något av följande.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
        justify="center"
        style={{ marginBottom: 350 }}
      >
        <Chip
          className={styles.chip}
          color="secondary"
          label="+46768807993"
          icon={<PhoneIcon fontSize="large" />}
        />
        <Chip
          className={styles.chip}
          color="secondary"
          label="carljohan.hornestam@gmail.com"
          icon={
            <IconButton href="mailto:carljohan.hornestam@gmail.com" target="_blank">
              <EmailIcon fontSize="large" />
            </IconButton>
          }
        />
        <Chip
          className={styles.chip}
          color="secondary"
          label="LinkedIn"
          icon={<LinkedInIcon fontSize="large" />}
        />
        <Chip
          className={styles.chip}
          color="secondary"
          label="Facebook"
          icon={<FacebookIcon fontSize="large" />}
        />
        <Chip
          className={styles.chip}
          color="secondary"
          label="Discord"
          icon={<FaDiscord size="1.4em" />}
        />
      </Grid>
    </Grid>
  );
};

export default Contact;
