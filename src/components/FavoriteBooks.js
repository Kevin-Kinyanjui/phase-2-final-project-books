import React, { useContext } from "react";
import { booksContext } from "../App";
import Book from "./Book";

function FavoriteBooks() {
  let { favoriteBooks } = useContext(booksContext);

  function removeLiked(book) {
    console.log(book);
  }

  return (
    <div>
      {favoriteBooks ? (
        favoriteBooks.map((book) => (
          <Book key={book.id} book={favoriteBooks} handleLike={removeLiked} />
        ))
      ) : (
        <h1> "No favorites selected" </h1>
      )}
    </div>
  );
}

export default FavoriteBooks;
