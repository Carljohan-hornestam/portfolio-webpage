import { makeStyles, Grid, IconButton, Typography, Button } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles((theme) => ({
  text: {
    color: "#ADEFD1FF",
    fontFamily: "Averia",
  },
  contactButton: {
    color: "#ADEFD1FF",
    fontFamily: "Averia",
    border: "2px solid #ADEFD1FF",
  }
}))

interface InfoProps {
  info: {
    firstName: string;
    lastName: string;
    profession: string;
    githubLink: string;
  };
}

export default function InfoBox({info}: InfoProps) {

  const styles = useStyles();
    
  return (
    <>
    <Grid style={{padding: 10}} item xs={12}>
    <Typography className={styles.text} variant="h4">{info.firstName} {" "} {info.lastName}</Typography>
    </Grid>
    <Grid style={{padding: 10}} item xs={12}>
    <Typography className={styles.text} variant="h6">{info.profession}</Typography>
    </Grid>
    <Grid style={{padding: 10}} item xs={12}>
    <Button className={styles.contactButton}>Kontakt</Button>
    </Grid>
    <Grid item xs={12}>
    <IconButton color="secondary" href={`${info.githubLink}`} target="_blank">
      <GitHubIcon fontSize="large"/>
    </IconButton>
    <IconButton color="secondary" href={`${info.githubLink}`} target="_blank">
      <FacebookIcon fontSize="large"/>
    </IconButton>
    </Grid>
    </>
  );
}

