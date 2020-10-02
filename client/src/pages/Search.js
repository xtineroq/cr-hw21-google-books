import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import SearchInput from '../components/SearchInput';
import SearchData from '../components/SearchData';

const useStyles = makeStyles(() => ({
    root: {
      backgroundImage: "../assets/book-bg.pg",
      width: "100%",
      height: "100%"
    },
    search: {
        margin: "auto"
    }
}));

function Search() {
    const classes = useStyles();

    const [result, setResult] = React.useState([]);

    return(
        <Box className={classes.root}>
            <SearchInput className={classes.search} setResult={setResult}/>
            <SearchData result={result}/>
        </Box>
    );
}

export default Search;