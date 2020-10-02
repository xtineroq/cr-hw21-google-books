import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import API from '../utils/API';

const useStyles = makeStyles((theme) => ({
  root: {
        padding: "2px 4px",
        display: "flex",
        width: "50vw",
        alignItems: 'center',
        marginTop: "2rem",
        marginBottom: "2rem"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
        padding: 10,
        color: "black"
    },
}));

export default function FormPropsTextFields({setResult}) {
  const classes = useStyles();

  const [search, setSearch] = React.useState("");

  const handleInput = (event) => {
    setSearch(event.target.value)
  }

  const handleSearch = async (event) => {
    event.preventDefault();

    if (search !== "") {

      try {
        const book = await API.getBook(search);
        setResult(book.data.items);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <Container>
      <Paper component="form" className={classes.root} noValidate autoComplete="off">
        <InputBase
            className={classes.input}
            placeholder="Search Google Books"
            inputProps={{ 'aria-label': 'search google maps' }}
            type="search"
            onChange={handleInput}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
          onClick={handleSearch}
        >
          <SearchIcon/>
        </IconButton>
      </Paper>
    </Container>
  );
}