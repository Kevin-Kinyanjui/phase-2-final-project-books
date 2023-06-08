import React, { useContext } from "react";
import { booksContext } from "../App";

function BookDetails({ book }) {
  const { setSelectedBook } = useContext(booksContext);

  const handleClick = () => {
    setSelectedBook(null);
  };

  return (
    <div class="container">
      <div class="book-areas">
        <div class="row">
          <div class="col-md-4">
            <div class="card h-100">
              <div class="card-body">
                <ul>
                  <h2>{book.title}</h2>
                  <p>Author: {book.authors}</p>
                  <p>Genre: {book.genres}</p>
                  <p>Description: {book.description}</p>
                  <p>Publication Date: {book.publicationDate}</p>
                </ul>
                <button onClick={() => handleClick()}> Back </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
