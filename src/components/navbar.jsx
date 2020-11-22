import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import "../styles.scss";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));
const CustomNavbar = () => {
  const classes = useStyles();
  const history = useHistory();
  function gotoHome() {
    history.push("/");
  }
  function gotoFav() {
    history.push("/Favourites");
  }
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Beans Love Bears
        </Typography>
        <Button color="inherit" onClick={gotoHome}>
          Home
        </Button>
        <Button color="inherit" onClick={gotoFav}>
          Favourites
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default CustomNavbar;
