import React, { useContext } from "react";
import { booksContext } from "../App";


          <div className="Book" key={book.id}>
            <img src={book.image_url} alt="book" width={200} height={300} />
            <div>{book.title}</div>
            <div>{book.authors}</div>

}

export default ReadingList;