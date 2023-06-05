import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import BooksList from "./BooksList";
import FavoriteBooks from "./FavoriteBooks";

function Navbar() {
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
    </div>
  );
}

export default Navbar;
