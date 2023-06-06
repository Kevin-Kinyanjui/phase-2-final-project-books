import React, { useContext } from "react";
import { booksContext } from "../App";

function FavoriteBooks() {
  // const [favoritebooks, setFavoriteBooks] = useState(null);
  let { books, setBooks } = useContext(booksContext);
  console.log(books);

  setBooks("hi");
  return (
    <div>
      <h1>FavoriteBooks </h1>
    </div>
  );
}

export default FavoriteBooks;
