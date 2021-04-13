import React from "react";
import { useHistory } from "react-router-dom";
import { Fade, Flip } from "react-reveal";
import {
  makeStyles,
  Grid,
  Typography,
  Button,
  Theme,
  IconButton,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  buttonsContainer: {
    textAlign: "center",
    maxHeight: 100,
  },
  infoLinkButton: {
    color: "#00203FFF",
    border: "1px solid black",
    width: 200,
    borderRadius: "50px",
    "&:hover": {
      background: "transparent",
      border: "1px solid #f50057",
      transition: "0.4s",
    },
  },
  infoButton: {
    color: "#00203FFF",
    border: "1px solid black",
    width: 150,
    "&:hover": {
      background: "transparent",
      border: "1px solid #f50057",
      transition: "0.4s",
    },
  },
  activeInfoButton: {
    color: "#00203FFF",
    width: 150,
    marginBottom: theme.spacing(2),
    border: "2px solid #f50057",
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
          <Typography className={styles.typography} variant="h4">
            Info om mig
          </Typography>
        ) : (
          <Typography className={styles.typography} variant="h4">
            Info om min utbildning
          </Typography>
        )}
      </Grid>
      <Grid className={styles.buttonsContainer} container item xs={4}>
        <Grid item xs={12}>
          <Flip right>
            <Button
              className={
                infoState === "info"
                  ? styles.activeInfoButton
                  : styles.infoButton
              }
              onClick={() => {
                setInfoState("info");
              }}
            >
              <Typography className={styles.typography} variant="h6">
                Vem är jag?
              </Typography>
            </Button>
          </Flip>
        </Grid>
        <Grid item xs={12}>
          <Flip left>
            <Button
              className={
                infoState === "education"
                  ? styles.activeInfoButton
                  : styles.infoButton
              }
              onClick={() => {
                setInfoState("education");
              }}
            >
              <Typography className={styles.typography} variant="h6">
                Utbildning
              </Typography>
            </Button>
          </Flip>
        </Grid>
      </Grid>
      <Grid container item xs={7}>
        <Fade bottom>
          {infoState === "info" ? (
            <Typography className={styles.typography} variant="h5">
              Jag heter Carl-Johan Hornestam och är 25 år gammal. Jag är en nyexaminerad
              Fullstack-utvecklare med en mängd olika tekniker i bagaget. Bland annat
              har jag goda kunskaper i: React, Vue 2 & 3, Java, Javascript med
              mera. Är du/ni intresserade av mer information om mig, klicka
              gärna på knappen nedanför så kan ni lära känna mig ännu bättre!
            </Typography>
          ) : (
            <Typography className={styles.typography} variant="h5">
              Jag har läst utbildningen Javautvecklare på yrkeshögskolan EC
              Utbildning i Malmö. Där har jag från grunden fått lära mig minst
              ett tiotal olika programmeringsspråk/tekniker. Några av dessa är
              Java, HTML & CSS, Javascript, Vue 2 & 3, React, Node, Spring med
              mera. Ett objektorienterat sätt att programmera på har legat i
              fokus under de två åren.
            </Typography>
          )}
        </Fade>
      </Grid>
      <Grid justify="center" alignContent="flex-start" container item xs={12}>
        <IconButton
          className={styles.infoLinkButton}
          onClick={() => history.push("/about")}
        >
          <Typography variant="h6">Lär känna mig</Typography>
        </IconButton>
      </Grid>
    </>
  );
};

export default SmallAbout;
