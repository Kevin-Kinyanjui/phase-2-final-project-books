import React, { useEffect, useState } from "react";
import Book from "./Book";

function FavoriteBooks() {
  const [favoritebooks, setFavoriteBooks] = useState(null);
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
  }, [setFavoriteBooks]);

  return (
    <div>
      <h1>Favorite Books</h1>
      {loading ? (
        <p>Loading favorite books...</p>
      ) : error ? (
        <p>{error}</p>
      ) : favoritebooks && favoritebooks.length > 0 ? (
        favoritebooks.map((book) => <Book key={book.id} book={book} />)
      ) : (
        <p>No favorite books yet.</p>
      )}
    </div>
  );
}

export default FavoriteBooks;
