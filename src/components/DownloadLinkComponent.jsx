import React, { Fragment, useState } from "react";
import {
  Box,
  Button,
  Card,
  Grid,
  Link,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { blueGrey, deepOrange, green } from "@material-ui/core/colors";
import urlParser from "url-parse";
import PlayForWorkIcon from "@material-ui/icons/PlayForWork";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "65vh",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4b61fa",
  },
  headerTitle: {
    color: "white",
    margin: theme.spacing(5, 0, 4, 0),
    textAlign: "center",
    textTransform: "capitalize",
  },
  headerDescription: {
    color: "white",
    margin: theme.spacing(3, 0, 4, 0),
    textAlign: "center",
    textTransform: "capitalize",
  },
  media: {
    width: "100%",
    height: "auto",
    maxHeight: "155px",
    overflowY: "hidden",
  },
  downloadbtn: {
    backgroundColor: green[600],
    "&:hover": {
      backgroundColor: green[700],
    },
    "&:active": {
      backgroundColor: green[700],
    },
  },
  itemSize: {
    color: blueGrey[700],
  },
  text: {
    fontSize: "1.6em",
    color: blueGrey[800],
    padding: theme.spacing(2, 0, 0, 0),
    textTransform: "capitalize",
  },
}));

export default function DownloadLinkComponent() {
  const classes = useStyles();
  const [link, setLink] = useState("");
  const [Query, setQuery] = useState("");
  const [error, setError] = useState("");

  const imageData = [
    {
      url: `https://img.youtube.com/vi/${Query}/maxresdefault.jpg`,
      title: "FHD+ (1080p, 4K)",
    },
    {
      url: `https://img.youtube.com/vi/${Query}/sddefault.jpg`,
      title: "LQ 480p",
    },
    {
      url: `https://img.youtube.com/vi/${Query}/hqdefault.jpg`,
      title: "MQ (360p)",
    },
    {
      url: `https://img.youtube.com/vi/${Query}/mqdefault.jpg`,
      title: "HQ 180P",
    },
  ];

  const handleOnSumit = (e) => {
    e.preventDefault();
    setError("");
    const { valid, query } = validateUrl(link);
    console.log(query);
    if (!valid) return setError("Invalid Youtube Url");

    setQuery(query);
  };

  const validateUrl = (url) => {
    const Url = urlParser(url, true);
    let query = "";
    let valid = false;
    const com = Url.hostname.includes("youtube.com");
    const be = Url.hostname.includes("youtu.be");
    if (com) {
      query = Url.query.v;
      valid = true;
    }
    if (be) {
      query = Url.pathname.slice(1);
      valid = true;
    }
    return { valid, query };
  };

  const handleOnChange = ({ target }) => {
    setLink(target.value);
  };

  return (
    <Fragment>
      <Grid container className={classes.root}>
        <Grid item xs={10} sm={10} lg={8}>
          <Box>
            <Typography
              variant='h4'
              component='h1'
              className={classes.headerTitle}>
              Youtube thumbnail Downloader
            </Typography>
            <Typography
              variant='body1'
              component='h1'
              className={classes.headerDescription}>
              We Make downloading Youtube Thumbnail Very easy with out tool ,
              just Past the youtube video link into the box to dwnload the
              thumbnail of required size.
            </Typography>
          </Box>
          <Paper component={Box} p={2} mt={3} mb={4}>
            <form onSubmit={handleOnSumit}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={8} md={9} lg={9}>
                  <TextField
                    fullWidth={true}
                    size='small'
                    variant='outlined'
                    label='Paste Youtube video link here '
                    error={error ? true : false}
                    helperText={error}
                    value={link}
                    onChange={handleOnChange}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  md={3}
                  lg={3}
                  style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    variant='contained'
                    size='large'
                    style={{
                      backgroundColor: deepOrange[600],
                      color: "white",
                    }}
                    type='submit'>
                    Download
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>

      {Query && (
        <Paper component={Box} mt={4} p={3}>
          <Box mt={2} mb={3}>
            <Typography className={classes.text}>
              Your Thumbnail is ready to download
            </Typography>
          </Box>
          <Grid container className={classes.imgSection} spacing={2}>
            {imageData.map((item, i) => (
              <Grid key={i} item xs={12} sm={4} lg={3}>
                <Card>
                  <img
                    src={item.url}
                    alt={item.url}
                    className={classes.media}
                  />
                  <Box p={1} display='flex' justifyContent='space-between'>
                    <Typography variant='h6' className={classes.itemSize}>
                      {item.title}
                    </Typography>
                  </Box>
                  <Box p={1} display='flex' justifyContent='space-between'>
                    <Button
                      size='small'
                      color='primary'
                      variant='contained'
                      startIcon={<PlayForWorkIcon />}
                      component={Link}
                      href={item.url}
                      target='blank'
                      className={classes.downloadbtn}>
                      Download
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      )}
    </Fragment>
  );
}
