import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '50vw'
  },
  iconButton: {
        padding: 10,
    },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root} noValidate autoComplete="off">
      <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          variant="outlined"
          fullWidth
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}