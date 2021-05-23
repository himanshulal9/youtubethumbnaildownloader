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
  //   <Route path='/aboutus'>
  //   <AboutUs />
  // </Route>
  // <Route path='/privacyPolicy'>
  //   <Privacy />
  // </Route>
  // <Route path='/contact'>
  const links = [
    { key: "home", url: "/" },
    { key: "Privacy Policy", url: "/privacyPolicy" },
    { key: "about us", url: "/aboutus" },
    { key: "contact us", url: "/contact" },
  ];
  return (
    <Box className={classes.root}>
      <Grid container component={Box} mt={3} p={3}>
        <Grid item xs={12} sm={5}>
          <Typography variant='h5' component='h4' gutterBottom>
            Company name
          </Typography>
          <Typography variant='body1' gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            quasi delectus saepe ipsa expedita at, porro tenetur illo facilis
            quia, error reiciendis a doloremque odit?
          </Typography>
        </Grid>
        <Grid item xs={12} sm={7}>
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
