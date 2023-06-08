import React, { useState } from "react";

function Book({ book, handleLike }) {
  const [liked, setLiked] = useState(book.liked);
  const [read, setRead] = useState(book.read)

  const handleLikeClick = () => {
    setLiked(true);
    handleLike(book);
  };

  const handleReadClick = () => {
    setRead(true);
    handleReadClick(book);
  }

  return (
    <div className="Book">
      <img src={book.image_url} alt="book" width={200} height={300} />
      <div>{book.title}</div>
      <div>{book.authors}</div>
      <button onClick={handleLikeClick} style={{ color: liked ? "red" : "black" }}>
        {liked ? "❤️" : "🤍"}
      </button>
      <button onClick={handleReadClick} >
        {read ? "+" : "✔"}
      </button>
    </div>
  );
}

export default Book;