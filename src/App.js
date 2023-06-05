import React, { createContext, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

const booksContext = createContext();

function App() {
  const [books, setBooks] = useState("works");
  const [favoritebooks, setFavoriteBooks] = useState(null);
  const [recommendations, setRecommendations] = useState(null);
  const [readingList, setReadingList] = useState(null);
  return (
    <booksContext.Provider
      value={{
        books,
        setBooks,
        favoritebooks,
        setFavoriteBooks,
        recommendations,
        setRecommendations,
        readingList,
        setReadingList,
      }}
    >
      <div className="App">
        <Navbar />
      </div>
    </booksContext.Provider>
  );
}

export default App;
export { booksContext };
