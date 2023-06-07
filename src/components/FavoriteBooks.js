// import React, { useContext, useEffect } from "react";
// import { booksContext } from "../App";

// function FavoriteBooks() {
//   const { favoritebooks, setFavoriteBooks } = useContext(booksContext);

//   useEffect(() => {
    
//     fetch("https://api.example.com/books")
//       .then((response) => response.json())
//       .then((data) => {
        
//         setFavoriteBooks(data);
//       })
//       .catch((error) => {
//         console.log("Error fetching data:", error);
//       });
//   }, [setFavoriteBooks]);

//   return (
//     <div>
//       <h1>Favorite Books</h1>
//       {favoritebooks && favoritebooks.length > 0 ? (
//         favoritebooks.map((book) => (
//           <div key={book.id}>
//             <h3>{book.title}</h3>
//             <p>{book.author}</p>
//             {/* Display other book details */}
//           </div>
//         ))
//       ) : (
//         <p>Loading favorite books...</p>
//       )}
//     </div>
//   );
// }

// export default FavoriteBooks;
import React, { useContext, useEffect, useState } from "react";
import { booksContext } from "../App";

function FavoriteBooks() {
  const { favoritebooks, setFavoriteBooks } = useContext(booksContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/books")
      .then((response) => response.json())
      .then((data) => {
        setFavoriteBooks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
        setError("loading favorite books...");
        setLoading(false);
      });
  }, [setFavoriteBooks]);

  return (
    <div>
      <h1>Favorite Books</h1>
      {loading ? (
        <p>Loading favorite books...</p>
      ) : error ? (
        <p>{error}</p>
      ) : favoritebooks && favoritebooks.length > 0 ? (
        favoritebooks.map((book) => (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            {/* Display additional book details */}
          </div>
        ))
      ) : (
        <p>No favorite books yet.</p>
      )}
    </div>
  );
}

export default FavoriteBooks;
