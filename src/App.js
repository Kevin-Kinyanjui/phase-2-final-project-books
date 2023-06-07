import React, { createContext, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

const booksContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  const [books, setBooks] = useState(null);
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  return (
    <booksContext.Provider
      value={{
        user,
        setUser,
        books,
        setBooks,
        favoriteBooks,
        setFavoriteBooks,
      }}
    >
      <div className="App">{user ? <Navbar /> : <Login />}</div>
    </booksContext.Provider>
  );
}

export default App;
export { booksContext };
