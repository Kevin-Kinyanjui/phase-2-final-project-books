import React, { useState } from "react";

function Book({ book, handleLike }) {
  const [liked, setLiked] = useState(book.liked);

  const handleLikeClick = () => {
    setLiked(true);
    handleLike(book);
  };

  return (
    <div className="Book">
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
