import React from "react";
import Box from "@material-ui/core/Box";
import Result from "../components/Result";

function SearchData({ result }) {
  const [searchedBook, setSearchedBook] = React.useState([]);

  React.useEffect(() => {
    console.log(result);
    if (result.length > 0) {
      setSearchedBook(result);
    } else {
      console.log("no match");
    }
  }, [setSearchedBook, result]);

  return (
    <Box>
      {searchedBook.map((book) => {
        return (
          <Result
            key={book.id}
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            description={book.volumeInfo.description}
            link={book.volumeInfo.infoLink}
            image={book.volumeInfo.imageLinks.thumbnail}
          />
        );
      })}
    </Box>
  );
}

export default SearchData;
