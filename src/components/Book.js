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
      <div>
        <strong>{book.title}</strong>
      </div>
      <div>
        <i>{book.authors}</i>
      </div>
      <div
        className="like-icon"
        onClick={(event) => {
          event.stopPropagation();
          handleLikeClick();
        }}
        style={{ color: liked ? "red" : "black" }}
      >
        {liked ? "❤️" : "🤍"}
      </div>
    </div>
  );
}

export default Book;
