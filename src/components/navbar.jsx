import React from "react";
import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";

const useStyles = makeStyles(() => ({
  navlink: {
    color: "white",
    textDecoration: "none",
    "&:hover": {
      color: "#efefef",
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar>
        <Link to='/' className={classes.navlink}>
          <IconButton edge='start' color='inherit' aria-label='menu'>
            <GetAppRoundedIcon />
          </IconButton>
        </Link>
        <Typography variant='h6'>
          <Link to='/' className={classes.navlink}>
            DownloadThumb
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
