import React from "react";
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
import RightImageModal from "./RightImageModal";

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
}));

interface RightProjectProps {
  projectName: string;
  description: string;
  githubLink: string;
  imageSrc: string;
  writtenIn: [];
  images: [];
}

export default function RightProject(props: RightProjectProps) {
  const styles = useStyles();
  const [rightImageModalOpen, setRightImageModalOpen] = React.useState<boolean>(
    false
  );

  return (
    <>
      <Grid alignContent="center" container item xs={9}>
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
        <Grid container justify="center" item xs={12}>
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
        <Grid justify="center" container item xs={12}>
          {props.writtenIn.map((i: number) => {
            return (
              <Chip
                key={i}
                variant="outlined"
                className={styles.chip}
                color="secondary"
                label={`${i}`}
              ></Chip>
            );
          })}
        </Grid>
      </Grid>

      <Grid justify="flex-end" container item xs={3}>
        <Tooltip title="Klicka på bilden för fler och större bilder">
        <img
          style={{cursor: "pointer"}}
          onClick={() => setRightImageModalOpen(true)}
          alt=""
          height={300}
          width={450}
          src={`${props.imageSrc}`}
        ></img>
        </Tooltip>
      </Grid>
      <Dialog
        maxWidth="lg"
        open={rightImageModalOpen}
        onClose={() => setRightImageModalOpen(false)}
      >
        <DialogContent>
          <RightImageModal images={props.images}/>
        </DialogContent>
      </Dialog>
    </>
  );
}
