import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { booksContext } from "../App";

function Book({ book, handleLike }) {
  const [liked, setLiked] = useState(book.liked);
  const { setSelectedBook } = useContext(booksContext);
  const navigate = useNavigate();

  const handleLikeClick = () => {
    setLiked(true);
    handleLike(book);
  };

  function handleSelectedBook(book) {
    setSelectedBook(book);
    navigate("/");
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
