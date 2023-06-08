import React, { useContext } from "react";
import { booksContext } from "../App";

  const ReadingList = () => {
  const { readingList, setReadingLists } = useContext(booksContext);

  const removeRead = (bookID) => {
    setReadingLists(readingList.filter((b) => b.id !== bookID));
  };
 
  return (
  <div>
    <div className="homeStyle">
      <h1>READING LIST</h1>
    </div>
    {readingList ? (
      readingList.reduce((acc, book) => {
        acc.push(
          <div className="Book" key={book.id}>
            <img src={book.image_url} alt="book" width={200} height={300} />
            <div>{book.title}</div>
            <div>{book.authors}</div>
            <button onClick={() => removeRead(book.id)}>
              <span role="img" aria-label="Love">
                Done
              </span>
            </button>
          </div>
        );
        return acc;
      }, [])
    ) : (
      <h1>NO BOOKS TO READ YET</h1>
    )}
  </div>
);
}

export default ReadingList;