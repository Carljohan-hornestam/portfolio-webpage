import { makeStyles, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  routesContainer: {
    margin: theme.spacing(2),
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
    <Grid container style={{ borderBottom: "2px solid black" }}>
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
              <Link to={route.route}>{route.name}</Link>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
