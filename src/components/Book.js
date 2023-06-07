import React from "react";

function Book({ book }) {
  return (
    <div className="Book">

      
      <img src={book.image_url} alt="book" width={200} height={300}/>
      <div>{book.title}</div>
      <div>{book.authors}</div>
    </div>
  );
}

export default Book;

