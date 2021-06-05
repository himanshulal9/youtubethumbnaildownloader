import { Box, Container, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import { Fragment } from "react";
import Navbar from "../navbar";

export default function AboutUs() {
  return (
    <Fragment>
      <Navbar />
      <Grid container>
        <Grid item xs={12} sm={8}>
          <Paper style={{ margin: "50px" }}>
            <Box component={Container} p={2}>
              <Typography
                variant='h5'
                component='h1'
                color='primary'
                gutterBottom={true}>
                About Us
              </Typography>
              <Typography variant='body1' gutterBottom={true}>
                Welcome to https://youtubethumbnaildownloader.nettool.in/, your
                number one source for downloading youtube thumbnail online.
                We're dedicated to providing you the very best quality of
                youtube thumbnail, with an emphasis on Easy downloading, Fast
                accessiblity, user Friendly app.
              </Typography>

              <Typography variant='body1'>
                Founded in 2020 by Himanshu lal,
                https://youtubethumbnaildownloader.nettool.in/ has come a long
                way from its beginnings in Delhi. When Shubham lal first started
                out,his passion for Creating Tools Which could save millions of
                times of content creator or digital marketor which use youtube
                as social platform and promote their product on other platforms
                like instagram drove them to start their own business.
              </Typography>
              <br />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
}
