import React, { useContext } from "react";
import { booksContext } from "../App";

function ReadingList() {
  let { reading, setReading } = useContext(booksContext);

  function removeReading(bookID) {
    setReading(reading.filter((b) => b.id !== bookID));
  }

  return (
    <>
      <div className="homeStyle">
        <h1>Books you are reading.</h1>{" "}
      </div>
      <div>
        {reading((book) => (
          <div className="Book" key={book.id}>
            <img src={book.image_url} alt="book" width={200} height={300} />
            <div>{book.title}</div>
            <div>{book.authors}</div>
            <button
              className="like-icon"
              onClick={() => removeReading(book.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default ReadingList;
