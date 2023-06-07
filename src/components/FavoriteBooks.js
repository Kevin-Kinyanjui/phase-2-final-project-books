import React, { useContext } from "react";
import { booksContext } from "../App";

function FavoriteBooks() {
  let { favoriteBooks } = useContext(booksContext);

  function removeLiked(book) {
    console.log(book);
  }

  return (
    <div>
      {!favoriteBooks ? (
        <h1> "No favorites selected" </h1>
      ) : (
        favoriteBooks.map((book) => (
          <div className="Book" key={book.id}>
            <img src={book.image_url} alt="book" width={200} height={300} />
            <div>{book.title}</div>
            <div>{book.authors}</div>
            <button onClick={() => removeLiked(book)}>Like</button>
          </div>
        ))
      )}
    </div>
  );
}

export default FavoriteBooks;
