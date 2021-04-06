import { makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    height: 650,
    background: "#00203FFF",
  },
}));

export default function About() {
  const styles = useStyles();

  return (
    <>
      <Grid className={styles.aboutContainer} container></Grid>
    </>
  );
}
