import React, { useContext } from "react";
import { booksContext } from "../App";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import BooksList from "./BooksList";
import FavoriteBooks from "./FavoriteBooks";

function Navbar() {
  let { user } = useContext(booksContext);
  return (
    <div>
      {" "}
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Books</NavLink>
              </li>
              <li>
                <NavLink to="favoritebooks">FavoriteBooks</NavLink>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route exact path="/" element={<BooksList />} />
            <Route path="favoritebooks" element={<FavoriteBooks />} />
          </Routes>
        </div>
      </Router>
      <h6>{user?.displayName}</h6>
      {user && <img src={user?.photoURL} alt="user" />}
    </div>
  );
}

export default Navbar;
