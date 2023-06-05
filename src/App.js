import React, { createContext, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

const booksContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  const [books, setBooks] = useState("works");
  const [favoritebooks, setFavoriteBooks] = useState(null);
  const [recommendations, setRecommendations] = useState(null);
  const [readingList, setReadingList] = useState(null);
  return (
    <booksContext.Provider
      value={{
        user,
        setUser,
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
      <div className="App">{user ? <Navbar /> : <Login />}</div>
    </booksContext.Provider>
  );
}

export default App;
export { booksContext };
