import React from "react";



//creating function for book list
function BookList({ books, onItemClick }) {
  function handleClick(bookId) {
    onItemClick(bookId);
  }

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id} onClick={handleClick.bind(null, book.id)}>
          {book.title}
        </li>
      ))}
    </ul>
  );
}

export default BookDetails;
