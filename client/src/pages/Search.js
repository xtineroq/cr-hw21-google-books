import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import SearchInput from "../components/SearchInput";
import SearchData from "../components/SearchData";
import Image from "../assets/book-bg.jpg";

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: `url(${Image})`,
    width: "100%",
    minHeight: "100vh",
  },
  search: {
    margin: "auto",
  },
}));

function Search() {
  const classes = useStyles();

  const [result, setResult] = React.useState([]);

  return (
    <Box className={classes.root}>
      <SearchInput className={classes.search} setResult={setResult} />
      <SearchData result={result} />
    </Box>
  );
}

export default Search;
