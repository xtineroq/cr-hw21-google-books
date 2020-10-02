import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import VisibilityIcon from '@material-ui/icons/Visibility';
import API from "../utils/API";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: "80vw",
    marginBottom: "2rem",
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

function SearchResult(props) {
  const classes = useStyles();

  const handleSave = (event) => {
    API.saveBook({
      title: props.title,
      authors: props.authors,
      description: props.description,
      image: props.image,
      link: props.link
    }).then(
      res => console.log(res)
      ).catch(
        err => console.log(err)
      )
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <Box className={classes.image}>
              <img className={classes.img} src={props.image} alt={props.title}></img>
            </Box>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography align="left" gutterBottom variant="subtitle1">
                  {props.title}
                </Typography>
                <Typography align="left" variant="body2" gutterBottom>
                  Author: {[props.authors].flat().join(", ")}
                </Typography>
                <Typography align="left" variant="body2" color="textSecondary">
                  {props.description}
                </Typography>
              </Grid>
              <Grid item xs align="left">
                <IconButton
                  variant="body2 outlined"
                  color="#teal"
                  href={props.link}
                >
                  <VisibilityIcon />
                </IconButton>
                <IconButton
                  variant="body2 outlined"
                  color="pink"
                  onClick={handleSave}
                >
                  <FavoriteBorderIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default SearchResult;
