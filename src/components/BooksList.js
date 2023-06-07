import React, { useContext, useEffect, useState } from "react";
import { booksContext } from "../App";

function BooksList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let { books, setBooks } = useContext(booksContext);

  useEffect(() => {
    fetch("https://example-data.draftbit.com/books?_limit=50")
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

  console.log(books);
  return <></>;
}

export default BooksList;
