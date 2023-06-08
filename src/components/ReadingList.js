import React, { useContext } from "react";
import { booksContext } from "../App";

  const ReadingList = () => {
  const { readingList, setreadingLists } = useContext(booksContext);

  const removeRead = (bookID) => {
    setFavoriteBooks(readingList.filter((b) => b.id !== bookID));
  };

  let { books } = useContext(booksContext);
  console.log(books);
  return (
    <>
      <div className="homeStyle">
        <h1>Books you are reading.</h1>{" "}
      </div>
      <div>ReadingList</div>
    </>
  );
}

export default ReadingList;