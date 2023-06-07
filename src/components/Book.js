import React from "react";

function Book({ book }) {
  function handleLike(book) {
    console.log(book);
  }

  return (
    <div className="Book">
      <img src={book.image_url} alt="book" width={200} height={300} />
      <div>{book.title}</div>
      <div>{book.authors}</div>
      <button onClick={() => handleLike(book)}>Like</button>
    </div>
  );
}

export default Book;
