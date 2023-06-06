import React, { useContext } from "react";
import { booksContext } from "../App";

function ReadingList() {
  // const [readingList, setReadingList] = useState(null);
  let { books } = useContext(booksContext);
  console.log(books);
  return <div>ReadingList</div>;
}

export default ReadingList;
