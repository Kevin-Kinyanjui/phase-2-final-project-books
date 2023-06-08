import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { booksContext } from "../App";

function FavoriteBooks() {
  const { favoriteBooks, setFavoriteBooks, setSelectedBook } =
    useContext(booksContext);
  const navigate = useNavigate();

  function removeLiked(bookID) {
    setFavoriteBooks(favoriteBooks.filter((b) => b.id !== bookID));
  }

  function handleSelected(book) {
    setSelectedBook(book);
    navigate("/");
  }

  return (
    <div>
      <div className="homeStyle">
        <h1>See books you have liked!</h1>{" "}
      </div>
      {!favoriteBooks ? (
        <h1>No favorites selected</h1>
      ) : (
        favoriteBooks.map((book) => (
          <div
            className="Book"
            key={book.id}
            onClick={() => handleSelected(book)}
          >
            <img src={book.image_url} alt="book" width={200} height={300} />
            <div>{book.title}</div>
            <div>{book.authors}</div>
            <div
              className="like-icon"
              onClick={(event) => {
                event.stopPropagation();
                removeLiked(book.id);
              }}
            >
              <span role="img" aria-label="Love">
                ❤️
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default FavoriteBooks;
