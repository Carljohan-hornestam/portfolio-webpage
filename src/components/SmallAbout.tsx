import React from "react";
import { useHistory } from "react-router-dom";
import { Fade, Flip } from "react-reveal";
import { makeStyles, Grid, Typography, Button, Theme, IconButton } from "@material-ui/core";
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme: Theme) => ({
  buttonsContainer: {
    textAlign: "center",
    maxHeight: 100,
  },
  infoLinkButton: {
    color: "#00203FFF",
    // border: "1px solid black",
    // width: 200,
    // borderRadius: "50px",
    "&:hover": {
      background: "transparent",
      // border: "1px solid #f50057",
    },
  },
  infoButton: {
    color: "#00203FFF",
    border: "1px solid black",
    marginBottom: theme.spacing(2),
    "&:hover": {
      background: "transparent",
      border: "1px solid #f50057",
      transition: "0.1s",
    },
  },
  activeInfoButton: {
    color: "#00203FFF",
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
        <Fade right>
          {infoState === "info" ? (
            <Typography className={styles.typography} variant="h5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              quod qui incidunt quia vero, facilis deleniti quas consectetur
              ullam porro, atque soluta eligendi reprehenderit earum ea nam
              voluptatum autem accusamus dicta sint numquam cum tempore cumque
              necessitatibus! Ipsam vitae quibusdam, doloribus deleniti,
              laudantium eius blanditiis est dolore autem sapiente iste. Est
              molestias ab dolor necessitatibus similique reiciendis inventore
              debitis nisi magnam, rerum eius consequatur eum dolorem officiis
              voluptatibus reprehenderit in minus! Ut odit saepe, veritatis illo
              dolores earum incidunt quasi deleniti magni officia. Voluptates
              molestiae incidunt esse ad sit nostrum, ipsam, sint in
              consequuntur illo autem ex. Atque, explicabo tempora.
            </Typography>
          ) : (
            <Typography className={styles.typography} variant="h5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vel
              nulla, facere quas eum dolorem rem et accusantium in porro tenetur
              ipsam eligendi inventore minima, numquam saepe corrupti at velit,
              pariatur quis accusamus voluptatum recusandae. Esse, velit
              corporis! Enim magni animi facilis dolorum atque ipsum laborum
              officiis quam, nihil fugiat officia deleniti nam vero dolorem
              excepturi facere eveniet optio accusantium? Necessitatibus alias
              quibusdam officiis corrupti fugiat labore ratione eaque optio iste
              sequi voluptatibus natus quasi consequuntur cupiditate, in aliquid
              nulla dolor repellendus porro, est harum laboriosam nisi velit at?
              Laboriosam assumenda fuga enim corporis sunt adipisci,
              necessitatibus vero quam maiores?
            </Typography>
          )}
        </Fade>
      </Grid>
      <Grid justify="center" alignContent="flex-start" container item xs={12}>
        <IconButton
          className={styles.infoLinkButton}
          onClick={() => history.push("/about")}
        >
          <InfoIcon color="primary" fontSize="large"/>
          {/* <Typography variant="h6">Mer info</Typography> */}
        </IconButton>
      </Grid>
    </>
  );
};

export default SmallAbout;
