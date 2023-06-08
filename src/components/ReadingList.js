import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { booksContext } from "../App";

function ReadingList() {
  let { reading, setReading, setSelectedBook } = useContext(booksContext);

  function removeReading(bookID) {
    setReading(reading.filter((b) => b.id !== bookID));
  }

  const navigate = useNavigate();

  function handleSelected(book) {
    setSelectedBook(book);
    navigate("/");
  }

  return (
    <>
      <div className="homeStyle">
        <h1>Books you are reading.</h1>{" "}
      </div>
      <div>
        {reading.map((book) => (
          <div
            className="Book"
            key={book.id}
            onClick={() => handleSelected(book)}
          >
            <img src={book.image_url} alt="book" width={200} height={300} />
            <div>{book.title}</div>
            <div>{book.authors}</div>
            <button
              className="like-icon"
              onClick={(event) => {
                event.stopPropagation();
                removeReading(book.id);
              }}
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
