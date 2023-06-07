import React, { useContext } from "react";
import { booksContext } from "../App";

function FavoriteBooks() {
  let { favoriteBooks, setFavoriteBooks } = useContext(booksContext);

  function removeLiked(bookID) {
    setFavoriteBooks(favoriteBooks.filter((b) => b.id !== bookID));
  }

  return (
    <div>
      <div className="homeStyle">
        <h1>See books you have liked!</h1>{" "}
      </div>
      {!favoriteBooks ? (
        <h1> "No favorites selected" </h1>
      ) : (
        favoriteBooks.map((book) => (
          <div className="Book" key={book.id}>
            <img src={book.image_url} alt="book" width={200} height={300} />
            <div>{book.title}</div>
            <div>{book.authors}</div>
            <button onClick={() => removeLiked(book.id)}>Like</button>
          </div>
        ))
      )}
    </div>
  );
}

export default FavoriteBooks;
