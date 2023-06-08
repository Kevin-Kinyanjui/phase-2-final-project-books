import React, { useState, useContext } from "react";
import { booksContext } from "../App";

function Book({ book, handleLike }) {
  const [liked, setLiked] = useState(book.liked);
  const { setSelectedBook } = useContext(booksContext);

  const handleLikeClick = () => {
    setLiked(true);
    handleLike(book);
  };

  function handleSelectedBook(book) {
    setSelectedBook(book);
  }

  return (
    <div className="Book" onClick={() => handleSelectedBook(book)}>
      <img src={book.image_url} alt="book" width={200} height={300} />
      <div>{book.title}</div>
      <div>{book.authors}</div>
      <div
        className="like-icon"
        onClick={handleLikeClick}
        style={{ color: liked ? "red" : "black" }}
      >
        {liked ? "❤️" : "🤍"}
      </div>
    </div>
  );
}

export default Book;
