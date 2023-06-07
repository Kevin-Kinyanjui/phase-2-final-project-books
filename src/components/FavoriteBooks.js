import React, { useState } from "react";
import Book from "./Book";

function FavoriteBooks() {
  const [favoriteBooks, setFavoriteBooks] = useState(null);

  return (
    <div>
      {favoriteBooks ? (
        favoriteBooks.map((book) => <Book key={book.id} book={favoriteBooks} />)
      ) : (
        <h1> "No favorites selected" </h1>
      )}
    </div>
  );
}

export default FavoriteBooks;
