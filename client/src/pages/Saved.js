import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import API from "../utils/API";
import Result from "../components/Result";
import Box from "@material-ui/core/Box";
import Image from "../assets/book-bg.jpg";

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: `url(${Image})`,
    width: "100%",
    minHeight: "100vh",
    paddingTop: "2rem",
  }
}));

function Saved() {
  const classes = useStyles();

  const [savedBooks, setSavedBooks] = React.useState([]);

  // retrieve saved books from db
  const fetchBook = () => {
    API.getBooks()
      .then((res) => {
        setSavedBooks(res.data)
      })
      .catch((err) => console.log(err));
  };

  // load saved books
  React.useEffect(() => {
    fetchBook();
  }, []);

  return (
    <Box className={classes.root}>
      {savedBooks.map((book) => {
        return (
          <Result
            key={book.id}
            title={book.title}
            authors={book.authors}
            description={book.description}
            link={book.link}
            image={book.image}
            id={book._id}
            fetchBook={fetchBook}
          />
        );
      })}
    </Box>
  );
}

export default Saved;
