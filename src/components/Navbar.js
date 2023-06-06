import React, { useContext } from "react";
import { booksContext } from "../App";
import { auth } from "../config/firebaseConfig";
import { signOut } from "firebase/auth";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import BooksList from "./BooksList";
import FavoriteBooks from "./FavoriteBooks";
import Recommendations from "./Recommendations";
import ReadingList from "./ReadingList";
import Comments from "./Comments";

function Navbar() {
  let { user, setUser } = useContext(booksContext);

  function logOut() {
    signOut(auth).then(() => {
      setUser(null);
    });
  }

  return (
    <>
      <Router>
        <div className="navbar">
          <div className="links">
            <nav>
              <ul>
                <NavLink to="/">Books</NavLink>
                <NavLink to="favoritebooks">FavoriteBooks</NavLink>
                <NavLink to="recommendations">Recommendations</NavLink>
                <NavLink to="readinglist">ReadingList</NavLink>
                <NavLink to="comments">Comments</NavLink>
              </ul>
            </nav>
          </div>

          <div className="user">
            <p>{user?.displayName}</p>
            {user && (
              <img src={user?.photoURL} alt="user" width="40" height="40" />
            )}
          </div>
          <button onClick={logOut}>logout</button>
        </div>
        <Routes>
          <Route exact path="/" element={<BooksList />} />
          <Route path="favoritebooks" element={<FavoriteBooks />} />
          <Route path="recommendations" element={<Recommendations />} />
          <Route path="readinglist" element={<ReadingList />} />
          <Route path="comments" element={<Comments />} />
        </Routes>
      </Router>
    </>
  );
}

export default Navbar;
