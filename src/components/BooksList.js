import React, { useContext } from "react";
import { booksContext } from "../App";

function BooksList() {
  let { books } = useContext(booksContext);
  console.log(books);
  return <div>BookList</div>;
}
useEffect(() => {
  fetch("https://example-data.draftbit.com/books?_limit=50")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return response.json();
    })
    .then((jsonData) => {
      setData(jsonData);
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


export default BooksList;
