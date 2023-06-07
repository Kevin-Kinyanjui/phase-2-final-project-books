import React, { useContext } from "react";
import { booksContext } from "../App";

function FavoriteBooks() {
  const { favoriteBooks, setFavoriteBooks } = useContext(booksContext);

  function removeLiked(bookID) {
    setFavoriteBooks(favoriteBooks.filter((b) => b.id !== bookID));
  }

  return (
    <div>
      {!favoriteBooks ? (
        <h1>No favorites selected</h1>
      ) : (
        favoriteBooks.map((book) => (
          <div className="Book" key={book.id}>
            <img src={book.image_url} alt="book" width={200} height={300} />
            <div>{book.title}</div>
            <div>{book.authors}</div>
            <button onClick={() => removeLiked(book.id)}>
              <span role="img" aria-label="Love">
                ❤️
              </span>
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default FavoriteBooks;
