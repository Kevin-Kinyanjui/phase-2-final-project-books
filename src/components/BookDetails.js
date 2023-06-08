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
    <div class="book-areas">
      <div class="row">
        <div class="col-md-4">
          <div class="card h-100">
            <div class="card-body">
              <ul>
                <h2 className="detailh2 ">{book.title}</h2>
                <img src={book.image_url} alt={book.title} height="400" />
                <h3 className="detailh3 ">Author: {book.authors}</h3>
                <h4 className="detailh4 ">Genre: {book.genres}</h4>
                <p className="detailp ">
                  <strong>Description</strong>: {book.description}
                </p>
                <p className="detailp ">Edition: {book.edition}</p>
                <p className="detailp ">Rating: {book.rating}</p>
                <p className="detailp ">Quote 1: {book.Quote1}</p>
                <p className="detailp ">Quote 2: {book.Quote2}</p>
                <p className="detailp ">Quote 3: {book.Quote3}</p>
              </ul>
              <button className="detailsButton" onClick={() => handleClick()}>
                {" "}
                Back{" "}
              </button>
              <button
                className="detailsButton"
                onClick={() => addToReading(book)}
              >
                {" "}
                Read{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
