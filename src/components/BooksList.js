import React, { useContext } from "react";
import { booksContext } from "../App";
import React, { useEffect } from "react";

<<<<<<< HEAD

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

  
=======
function BooksList() {
  // let { books, setBooks } = useContext(booksContext);
  return <></>;
}
>>>>>>> cc2c7ecd4f288dba10f6f0afb81a50da698cdfe0

export default BooksList;
