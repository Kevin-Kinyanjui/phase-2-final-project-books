import React, { useContext } from "react";
import { booksContext } from "../App";

function Book() {
  let { books } = useContext(booksContext);
  console.log(books);
  return <div>Books</div>;
}

export default Book;
