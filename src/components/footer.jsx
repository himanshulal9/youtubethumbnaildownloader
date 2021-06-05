import React from "react";
import {
  Box,
  Grid,
  List,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { indigo } from "@material-ui/core/colors";

const userStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: indigo["A400"],
    color: "White",
  },
  links: {
    color: "white",
    textAlign: "center",
    opacity: "0.8",
    textTransform: "capitalize",
    textDecoration: "none",
    fontFamily: "roboto",
    "& :hover": {
      textDecoration: "none",
      opacity: "1",
      color: indigo[800],
    },
  },
}));

export default function Footer() {
  const classes = userStyles();

  const links = [
    { key: "home", url: "/" },
    { key: "Privacy Policy", url: "/privacyPolicy" },
    { key: "about us", url: "/aboutus" },
    { key: "contact us", url: "/contact" },
  ];
  return (
    <Box className={classes.root}>
      <Grid container component={Box} mt={3} p={3}>
        <Grid item xs={12} sm={4}>
          <Typography variant='h5' component='h4' gutterBottom>
            About us
          </Typography>
          <Typography variant='body1' gutterBottom>
            We provide a free youtube thumbnail downloader app as tool It is
            very responsive and could be run on any devices,so take advantage of
            this tool share it to your friends or family, keep Supporting
            @youtubethumbnaildownloader.nettool.in
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant='body1' component='h4' gutterBottom>
            Important Link
          </Typography>
          <List>
            {links.map((item, i) => (
              <ListItem
                key={i}
                component={Link}
                className={classes.links}
                to={item.url}>
                {item.key}
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} sm={4}></Grid>
      </Grid>
    </Box>
  );
}
