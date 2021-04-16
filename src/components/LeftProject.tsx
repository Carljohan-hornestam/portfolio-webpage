import {
  makeStyles,
  Grid,
  Typography,
  Tooltip,
  IconButton,
  Chip,
  Dialog,
  DialogContent,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import React from "react";
import LeftImageModal from "./LeftImageModal";

const useStyles = makeStyles((theme) => ({
  typography: {
    color: "#ADEFD1FF",
    padding: theme.spacing(1),
    fontFamily: "Averia",
    textAlign: "center",
  },
  chip: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    fontFamily: "Bebas+Neue",
    fontSize: 15,
  },
  dialog: {},
}));

interface LeftProjectProps {
  projectName: string;
  description: string;
  githubLink: string;
  imageSrc: string;
  writtenIn: [];
  images: [];
}

export default function LeftProject(props: LeftProjectProps) {
  const styles = useStyles();
  const [leftImageModalOpen, setLeftImageModalOpen] = React.useState<boolean>(
    false
  );
  return (
    <>
      <Grid item xs={4}>
        <Tooltip title="Klicka på bilden för fler och större bilder">
        <img
          style={{cursor: "pointer"}}
          onClick={() => setLeftImageModalOpen(true)}
          alt=""
          height={300}
          width={550}
          src={`${props.imageSrc}`}
        ></img>
        </Tooltip>
      </Grid>
      <Grid alignContent="center" container item xs={8}>
        <Grid item xs={12}>
          <Typography className={styles.typography} variant="h5">
            {props.projectName}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={styles.typography} variant="h6">
            {props.description}
          </Typography>
        </Grid>
        <Grid container item xs={12} justify="center">
          <Tooltip title="Länk till GitHub repo">
            <IconButton
              color="secondary"
              href={`${props.githubLink}`}
              target="_blank"
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid container justify="center" item xs={12}>
          {props.writtenIn.map((i: number) => {
            return (
              <>
                <Chip
                  key={i}
                  variant="outlined"
                  className={styles.chip}
                  color="secondary"
                  label={`${i}`}
                ></Chip>
              </>
            );
          })}
        </Grid>
      </Grid>
      <Dialog
        className={styles.dialog}
        maxWidth="lg"
        open={leftImageModalOpen}
        onClose={() => setLeftImageModalOpen(false)}
      >
        <DialogContent>
          <LeftImageModal images={props.images} />
        </DialogContent>
      </Dialog>
    </>
  );
}
