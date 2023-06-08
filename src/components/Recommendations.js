import React, { useEffect, useState } from "react";

// fetching books data from api
const fetchBooks = async () => {
  try {
    const response = await fetch(
      "https://example-data.draftbit.com/books?_limit=150"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();

    const uniqueGenres = Array.from(
      new Set(data.flatMap((book) => book.genres.split(", ")))
    );
    return { data, uniqueGenres };
  } catch (error) {
    console.log("Error fetching data:", error);
    throw new Error("Failed to fetch recommendations.");
  }
};

function Recommendations() {
  // state variables
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [genres, setGenres] = useState([]);
  const [showRecommendations, setShowRecommendations] = useState(false); // New state variable

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data, uniqueGenres } = await fetchBooks();
        setGenres(uniqueGenres);
        setRecommendations(data);
      } catch (error) {
        console.log(error);
        setError("Failed to fetch recommendations.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedGenre]);

  const shuffleBooks = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
    setShowRecommendations(false); // Reset the showRecommendations state when genre changes
  };

  const handleSearch = () => {
    generateRecommendations();
    setShowRecommendations(true); // Show recommendations when search is clicked
  };

  const generateRecommendations = () => {
    if (selectedGenre) {
      const filteredBooks = recommendations.filter((book) => {
        const genresArray = book.genres
          .split(", ")
          .map((genre) => genre.trim());
        return genresArray.includes(selectedGenre);
      });
      const randomRecommendations = shuffleBooks(filteredBooks).slice(0, 5);
      setRecommendations(randomRecommendations);
    } else {
<<<<<<< HEAD
      setRecommendations([]); // Reset the recommendations when no genre is selected
=======
      const randomRecommendations = shuffleBooks(recommendations).slice(0, 5);
      setRecommendations(randomRecommendations);
>>>>>>> e0ce03eb57236f64ea0af2bbf08755696648843f
    }
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
      <select
        value={selectedGenre}
        onChange={handleGenreChange}
        className="border border-gray-300 rounded-md px-2 py-1"
      >
        <option value="">Select a Genre</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2"
      >
        Search
      </button>

      {showRecommendations && recommendations.length > 0 ? (
        <ul>
          {recommendations.map((book) => (
            <li key={book.id}>
              <strong>Title:</strong> {book.title}, <strong>Author:</strong>{" "}
              {book.authors}
            </li>
          ))}
        </ul>
      ) : showRecommendations ? (
        <p>No recommendations available.</p>
      ) : null}
    </div>
  );
}

export default Recommendations;