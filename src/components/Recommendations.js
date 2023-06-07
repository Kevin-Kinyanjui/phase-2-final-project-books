import React, { useEffect, useState } from "react";
import Book from "./Book";

function Recommendations() {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          "https://example-data.draftbit.com/books?_limit=150"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        const randomRecommendations = shuffleBooks(data).slice(0, 10);
        setRecommendations(randomRecommendations);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching data:", error);
        setError("Failed to fetch recommendations.");
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const shuffleBooks = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  if (loading) {
    return <div>Loading recommendations...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Recommendations</h2>
      {recommendations.length > 0 ? (
        <ul>
          {recommendations.map((book) => (
            <li key={book.id}>{book.title}</li>
          ))}
        </ul>
      ) : (
        <p>No recommendations available.</p>
      )}
    </div>
  );
}

export default Recommendations;
