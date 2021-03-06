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
                Vem ??r jag?
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
              Jag heter Carl-Johan Hornestam och ??r 25 ??r gammal. Jag ??r en nyexaminerad
              Javautvecklare med en m??ngd olika tekniker i bagaget. Bland annat
              har jag goda kunskaper i: React, Vue 2 & 3, Java, Javascript med
              mera. ??r du/ni intresserade av mer information om mig, klicka
              g??rna p?? knappen nedanf??r s?? kan ni l??ra k??nna mig ??nnu b??ttre!
            </Typography>
          ) : (
            <Typography className={styles.typography} variant="h5">
              Jag har l??st utbildningen Javautvecklare p?? yrkesh??gskolan EC
              Utbildning i Malm??. D??r har jag fr??n grunden f??tt l??ra mig minst
              ett tiotal olika programmeringsspr??k/tekniker. N??gra av dessa ??r
              Java, HTML & CSS, Javascript, Vue 2 & 3, React, Node, Spring med
              mera. Ett objektorienterat s??tt att programmera p?? har legat i
              fokus under de tv?? ??ren.
            </Typography>
          )}
        </Fade>
      </Grid>
      <Grid justify="center" alignContent="flex-start" container item xs={12}>
        <IconButton
          className={styles.infoLinkButton}
          onClick={() => history.push("/about")}
        >
          <Typography variant="h6">L??r k??nna mig</Typography>
        </IconButton>
      </Grid>
    </>
  );
};

export default SmallAbout;
