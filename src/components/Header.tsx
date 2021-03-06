import { makeStyles, Grid, Typography } from "@material-ui/core";
import Lightspeed from "react-reveal";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  routesPageContainer: {
    // background: "linear-gradient(to left, #071b24, #0f6c96)"
    background: "#ADEFD1FF",
    borderBottom: "2px solid #30110d",
  },
  routesContainer: {
    // margin: theme.spacing(2),
    marginRight: theme.spacing(5),
  },
  route: {
    margin: theme.spacing(2),
    textDecoration: "none",
    color: "00203FFF",
    fontSize: "20px",
    fontFamily: "Averia",
  },
  activeRoute: {
    // color: "#ffff",
    color: "#f50057",
    textDecoration: "underline",
    transition: "0.3s ease-in-out",
  },
}));

interface HeaderProps {
  routes: [];
}
interface Route {
  route: string;
  name: string;
}

export default function Header(props: HeaderProps) {
  const styles = useStyles();

  return (
    <Lightspeed left>
      <Grid container className={styles.routesPageContainer}>
        <Grid
          container
          item
          xs={12}
          justify="flex-end"
          spacing={2}
          className={styles.routesContainer}
        >
          {props.routes.map((route: Route, index: number) => {
            return (
              <Grid key={index} item>
                <NavLink
                  activeClassName={
                    route.route === "/" ? null : styles.activeRoute
                  }
                  className={styles.route}
                  to={route.route}
                >
                  <Typography variant="h6">
                  {route.name}
                  </Typography>
                </NavLink>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Lightspeed>
  );
}
