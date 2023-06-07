import React, { useEffect, useState } from "react";
import Book from "./Book";

function FavoriteBooks() {
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [likedBooks, setLikedBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://example-data.draftbit.com/books?_limit=150")
      .then((response) => response.json())
      .then((data) => {
        setFavoriteBooks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
        setError("Failed to fetch favorite books.");
        setLoading(false);
      });
  }, []);

  const handleLikeBook = (book) => {
    setLikedBooks((prevLikedBooks) => [...prevLikedBooks, book]);
  };

  return (
    <div>
      <h1>Favorite Books</h1>
      {loading ? (
        <p>Loading favorite books...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          {likedBooks.length > 0 ? (
            <div>
              <h2>Liked Books</h2>
              {likedBooks.map((book) => (
                <Book key={book.id} book={book} />
              ))}
            </div>
          ) : (
            <p>No favorite books yet.</p>
          )}
          {favoriteBooks.length > 0 &&
            favoriteBooks.map((book) => (
              <Book key={book.id} book={book} onLike={() => handleLikeBook(book)} />
            ))}
        </div>
      )}
    </div>
  );
}

export default FavoriteBooks;


