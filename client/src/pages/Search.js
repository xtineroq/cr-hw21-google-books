import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import SearchGroup from '../components/SearchGroup';

const useStyles = makeStyles(() => ({
    root: {
      backgroundColor: "grey",
      width: "100vw",
      height: "100vh"
    },
    search: {
        margin: "auto"
    }
}));

function Search() {
    const classes = useStyles();

    return(
        <Box className={classes.root}>
            <SearchGroup className={classes.search}/>
        </Box>
    );
}

export default Search;