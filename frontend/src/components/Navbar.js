// import Grid from "@material-ui/core/Grid";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
import React from "react";
// import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 3,
  },
}));


const Navbar = () => {
  const classess = useStyles();
  return (
    <div className={classess.root}>
      <AppBar position="static" style={{ background: "transparent"}}>
        <Toolbar>
          <Typography variant="h6">
            <a href="/">
              <Button color="inherit">CRating</Button>
            </a>
          </Typography>
          <a href="/account">
            <Button color="inherit">Login</Button>
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
