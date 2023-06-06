import React, { useContext } from "react";
import { booksContext } from "../App";

function FavoriteBooks() {
  const { favoritebooks } = useContext(booksContext);

  return (
    <div>
      <h1>Favorite Books</h1>
      {favoritebooks && favoritebooks.length > 0 ? (
        favoritebooks.map((book) => (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            {/* Display other book details */}
          </div>
        ))
      ) : (
        <p>No favorite books yet.</p>
      )}
    </div>
  );
}

export default FavoriteBooks;
