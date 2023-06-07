import React, { useState } from "react";

function Book({ book, onLike}) {
  const [liked,setLiked] = useState(false);

  const handleLike = () => {
    setLiked(true);
    onLike(book);
  };

  return (
    <div className="Book">
      <img src={book.image_url} alt="book" width={200} height={300}/>
      <div>{book.title}</div>
      <div>{book.authors}</div>
      <button onClick={handleLike} disabled={liked}> 
      {liked ? "Liked" : "Like"}
      </button>
    </div>
  );
}

export default Book;

