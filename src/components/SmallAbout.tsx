import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, Grid, Typography, Button, Theme } from "@material-ui/core";
import { Fade, Flip } from "react-reveal";

const useStyles = makeStyles((theme: Theme) => ({
  buttonsContainer: {
    textAlign: "center",
    maxHeight: 100
  },
  infoLinkButton: {
    color: "#00203FFF",
    "&:hover": {
      background: "transparent",
      borderBottom: "1px solid #f50057"
    }
  },
  infoButton: {
    color: "#00203FFF",
    marginBottom: theme.spacing(2),
    "&:hover": {
      background: "transparent",
      borderBottom: "2px solid #f50057"
    }
  },
  activeInfoButton: {
    color: "#00203FFF",
    marginBottom: theme.spacing(2),
    borderBottom: "2px solid #f50057"
  },
  typography: {
    color: "#00203FFF",
    fontFamily: "Averia",
  },
}));

const SmallAbout: React.FC = () => {
  const [infoState, setInfoState] = React.useState<string>("info");
  const history = useHistory();
  const styles = useStyles();

  return (
    <>
      <Grid justify="center" alignContent="center" container item xs={12}>
        {infoState === "info" ? (
          <Typography className={styles.typography} variant="h4">Info om mig</Typography>
        ) : (
          <Typography className={styles.typography} variant="h4">Info om min utbildning</Typography>
        )}
      </Grid>
      <Grid className={styles.buttonsContainer} container item xs={4}>
        <Grid item xs={12}>
          <Flip right>
            <Button className={infoState === "info" ? styles.activeInfoButton : styles.infoButton}
              onClick={() => {
                setInfoState("info");
              }}
            >
              <Typography className={styles.typography} variant="h6">Vem är jag?</Typography>
            </Button>
          </Flip>
        </Grid>
        <Grid item xs={12}>
          <Flip left>
            <Button
              className={infoState === "education" ? styles.activeInfoButton : styles.infoButton}
              onClick={() => {
                setInfoState("education");
              }}
            >
              <Typography className={styles.typography} variant="h6">Utbildning</Typography>
            </Button>
          </Flip>
        </Grid>
      </Grid>
      <Grid container item xs={7}>
        <Fade right>
          {infoState === "info" ? (
            <Typography className={styles.typography} variant="h5">Lite info om mig</Typography>
          ) : (
            <Typography className={styles.typography} variant="h5">Lite info om min utbildning</Typography>
          )}
        </Fade>
      </Grid>
      <Grid justify="center" alignContent="center" container item xs={12}>
        <Button className={styles.infoLinkButton} onClick={(() => history.push("/about"))}>
          <Typography variant="h6">
            Mer info
          </Typography>
        </Button>
      </Grid>
    </>
  );
};

export default SmallAbout;
