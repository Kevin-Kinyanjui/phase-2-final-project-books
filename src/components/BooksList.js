import React, { useContext, useEffect, useState } from "react";
import { booksContext } from "../App";
import Book from "./Book";
import SearchBar from "./SearchBar";
import BookDetails from "./BookDetails";

function BooksList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let { books, setBooks, favoriteBooks, setFavoriteBooks } =
    useContext(booksContext);

  useEffect(() => {
    fetch("https://example-data.draftbit.com/books?_limit=150")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      }); // eslint-disable-next-line
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  function handleLike(book) {
    if (!favoriteBooks.includes(book)) {
      setFavoriteBooks((prevLikedBooks) => [...prevLikedBooks, book]);
      console.log(favoriteBooks);
    }
  }
  function handleSearch(searchText) {
    setSearchTerm(searchText);
  }
  const searchedBooks = books.filter((book) =>
  book.title.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <>
      <div className="homeStyle">
        <h1>Unleash the Magic of Books!</h1>{" "}
      </div>
      <br />
      <SearchBar />
      {books.map((book) => (
        <Book key={book.id} book={book} handleLike={handleLike} />
      ))}
    </>
  );
}

export default BooksList;