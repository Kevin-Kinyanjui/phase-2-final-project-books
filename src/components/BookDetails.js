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

      <div class="book-areas">
        <div class="row">
          <div class="col-md-4">
            <div class="card h-100">
              <div class="card-body">
                <ul>
                  <h2>{book.title}</h2>
                  <h3>Author: {book.authors}</h3>
                  <h4>Genre: {book.genres}</h4>
                  <p><strong>Description</strong>: {book.description}</p>
                  <p>Publication Date: {book.publicationDate}</p>
                </ul>
                <button onClick={() => handleClick()}> Back </button>
      <button onClick={() => addToReading(book)}> Read </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default BookDetails;
