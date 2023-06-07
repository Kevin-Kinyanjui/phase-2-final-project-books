import React, { useContext } from "react";
import { booksContext } from "../App";

//creating function for book details( in list)
function BookDetails({ books, onItemClick }) {
  let { books } = useContext(booksContext);
  function handleClick(bookId) {
    onItemClick(bookId);
  }

  //adding useeffect incase usecontext fails
  useEffect(() => {
    fetch("url")
      .then((response) => response.json())
      .then((data) => {
        setBots(data);
      });
  }, []);

//projects a list of the title, description....etc
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id} onClick={handleClick.bind(null, book.id)}>
                <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Description: {book.description}</p>
      <p>Publication Date: {book.publicationDate}</p>

        </li>
      ))}
    </ul>
  );
}

export default BookDetails;
