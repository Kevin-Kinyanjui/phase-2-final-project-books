import React, { useContext } from "react";
import { booksContext } from "../App";

function BookDetails({ book }) {
  const { setSelectedBook, reading, setReading } = useContext(booksContext);

  const handleClick = () => {
    setSelectedBook(null);
  };

  function addToReading(book) {
    if (!reading.includes(book)) {
      setReading((prevReadBooks) => [...prevReadBooks, book]);
    }
  }

  return (
    <div class="container">
      <ul>
        <h2>{book.title}</h2>
        <p>Author: {book.authors}</p>
        <p>Genre: {book.genres}</p>
        <p>Description: {book.description}</p>
        <p>Publication Date: {book.publicationDate}</p>
      </ul>
      <button onClick={() => handleClick()}> Back </button>
      <button onClick={() => addToReading(book)}> Read </button>
    </div>
  );
}

export default BookDetails;
