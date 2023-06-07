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
                <NavLink to="/">Home</NavLink>

                <NavLink to="favoritebooks">Favorites</NavLink>
                <NavLink to="Recommendations">Recommendations</NavLink>
                <NavLink to="Active-reads">Active-reads</NavLink>
                <NavLink to="comments">Comments</NavLink>
                <NavLink to="Search">Search</NavLink>
                
                


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
    
        </Routes>
      </Router>
    </>
  );
}

export default Navbar;
