import React from "react";

//creating function for book details( in list)
function BookDetails({ books, onItemClick }) {
  function handleClick(bookId) {
    onItemClick(bookId);
  }

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
