import React, { useContext } from "react";
import { booksContext } from "../App";
import React, { useEffect } from "react";


const BooksList = ({ books, onBookOver }) => {
  let { books, setBooks } = useContext(booksContext);

  useEffect(() => {
    fetch("../db.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((jsonData) => {
        setBooks(jsonData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
};

  return (
    <ul className="book-list">
      {books.map((book) => (
        <li key={book.id} onOver={() => onBookOver(book.id)}>
          {book.title}
        </li>
      ))}
    </ul>
  );

  

export default BooksList;
