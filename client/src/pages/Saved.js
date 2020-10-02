import React from "react";
import API from "../utils/API";
import Result from "../components/Result";
import Box from "@material-ui/core/Box";

function Saved() {

  const [savedBooks, setSavedBooks] = React.useState([]);

  // retrieve saved books from db
  const fetchBook = () => {
    API.getBooks()
      .then((res) => {
        console.log(res.data);
        setSavedBooks(res.data)
      })
      .catch((err) => console.log(err));
  };

  // load saved books
  React.useEffect(() => {
    fetchBook();
  }, []);

  return (
    <Box>
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
