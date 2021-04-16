import {
  makeStyles,
  Grid,
  Typography,
  Chip,
  // IconButton,
} from "@material-ui/core";
// import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PhoneIcon from "@material-ui/icons/Phone";
// import { FaDiscord } from "react-icons/fa";
import Fade from "react-reveal";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    backgroundColor: "#00203FFF",
    height: 889,
  },
  typography: {
    color: "#ADEFD1FF",
    fontFamily: "Averia"
  },
  phoneChip: {
    padding: theme.spacing(3),
    margin: theme.spacing(1),
    fontSize: 20,
    color: "#00203FFF",
  },
  chip: {
    padding: theme.spacing(3),
    margin: theme.spacing(1),
    fontSize: 20,
    color: "#00203FFF",
    cursor: "pointer"
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
        <Fade>
        <Chip
          className={styles.phoneChip}
          color="secondary"
          label="+46768807993"
          icon={<PhoneIcon fontSize="large" />}
        />
        <a
          style={{ textDecoration: "none", height: 63 }}
          href="mailto:carljohan.hornestam95@gmail.com"
        >
          <Chip
            className={styles.chip}
            color="secondary"
            label="carljohan.hornestam95@gmail.com"
            icon={<EmailIcon fontSize="large" />}
          />
        </a>
        <a
          style={{ textDecoration: "none", height: 63 }}
          rel="noreferrer"
          href="https://www.linkedin.com/in/carl-johan-hornestam-2b2b4020b/"
          target="_blank"
        >
          <Chip
            className={styles.chip}
            color="secondary"
            label="LinkedIn"
            icon={<LinkedInIcon fontSize="large" />}
          />
        </a>
        </Fade>
        {/* <Chip
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
        /> */}
      </Grid>
    </Grid>
  );
};

export default Contact;
