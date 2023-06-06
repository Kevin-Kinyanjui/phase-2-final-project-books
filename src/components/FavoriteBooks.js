import React, { useContext } from "react";
import { booksContext } from "../App";

function FavoriteBooks() {
  // const [favoritebooks, setFavoriteBooks] = useState(null);
  let { books } = useContext(booksContext);
  console.log(books);

  return (
    <div>
      <h1>FavoriteBooks </h1>
    </div>
  );
}

export default FavoriteBooks;
