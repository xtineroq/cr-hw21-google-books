import React from "react";
import API from "../utils/API";
import Result from "../components/Result";

function Saved() {
  state = {
    savedBooks: [],
  };

  React.useEffect(() => {
    fetchBook();
  });

  fetchBook = () => {
    API.getBooks()
      .then((res) => {
        setState({ savedBooks: res.data }, function () {
          console.log(savedBooks);
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box>
      {savedBooks.map((book) => {
        return (
          <Result
            key={book.id}
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            description={book.volumeInfo.description}
            link={book.volumeInfo.infoLink}
            image={book.volumeInfo.imageLinks.thumbnail}
            id={book._id}
            fetchBooks={fetchBooks}
          />
        );
      })}
    </Box>
  );
}

export default Saved;
