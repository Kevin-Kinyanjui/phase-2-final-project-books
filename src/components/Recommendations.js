import React, { useEffect, useState } from "react";

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
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchBooks()
      .then(({ data, uniqueGenres }) => {
        setGenres(uniqueGenres);
        setRecommendations(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError("Failed to fetch recommendations.");
        setLoading(false);
      });
  }, []);

  const shuffleBooks = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleSearch = () => {
    generateRecommendations();
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
      const randomRecommendations = shuffleBooks(recommendations).slice(0, 5);
      setRecommendations(randomRecommendations);
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
        <option value="">All Genres</option>
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

      {recommendations.length > 0 ? (
        <ul>
          {recommendations.map((book) => (
            <li key={book.id}>
              <strong>Title:</strong> {book.title}, <strong>Author:</strong>{" "}
              {book.authors}
            </li>
          ))}
        </ul>
      ) : (
        <p>No recommendations available.</p>
      )}
    </div>
  );
}

export default Recommendations;