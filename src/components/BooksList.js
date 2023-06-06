import React, { useContext } from "react";
import { booksContext } from "../App";

function BooksList() {
  let { books } = useContext(booksContext);
  console.log(books);
  return <div>BookList</div>;
}

export default BooksList;
