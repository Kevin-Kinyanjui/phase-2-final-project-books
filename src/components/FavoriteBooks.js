import React, { useContext } from "react";
import { booksContext } from "../App";

function FavoriteBooks() {
  let { books, setBooks } = useContext(booksContext);

  setBooks("");
  return (
    <div>
      <h1>FavoriteBooks {books}</h1>
    </div>
  );
}

export default FavoriteBooks;
