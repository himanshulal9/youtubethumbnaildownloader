import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";

export default function Navbar() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton edge='start' color='inherit' aria-label='menu'>
          <GetAppRoundedIcon />
        </IconButton>
        <Typography variant='h6'>DownloadThumb</Typography>
        {/* <Button color="inherit">Login</Button> */}
      </Toolbar>
    </AppBar>
  );
}
