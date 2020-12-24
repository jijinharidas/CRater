// import Grid from "@material-ui/core/Grid";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
import React from "react";
// import axios from "axios";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import { loadState, loadLoggedin, saveLoggedin } from '../../localStorage';
import { url } from '../../Creds'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const checkLoggedin = () => {
  let x = loadLoggedin()
  console.log(x);
  if (x === 'loggedIn') {
    return true
  }
  return false;
}

const logout = () => {
  const token = loadState('token');
  const config = {
    headers: { Authorization: `Token ${token}` }
  }
  console.log(config)
  saveLoggedin('notLoggedIn')
  axios
    .post(`${url}/users/api/auth/logout`, null, config)
    .then(() => window.location.reload())
    .catch((err) => console.log(err)); // error 400

}

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "transparent", backgroundColor: "#000000" }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6">
            <a href="/">
              <Button color="inherit">CRating</Button>
            </a>
          </Typography>
          {checkLoggedin() ? <Button onClick={logout} color="inherit">Logout</Button> : <a href="/account"><Button color="inherit">Login</Button></a>}

        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
