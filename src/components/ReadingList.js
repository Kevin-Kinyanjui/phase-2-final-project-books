import React, { useContext } from "react";
import { booksContext } from "../App";

function ReadingList() {
  // const [readingList, setReadingList] = useState(null);
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
