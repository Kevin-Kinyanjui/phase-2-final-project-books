import React from "react";

function SearchBar({ onSearch }) {
  function handleSearch(event) {
    onSearch(event.target.value);
  }

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          onChange={handleSearch}
          className="search-input"
          placeholder="Search..."
        />
      </div>
    </>
  );
}

export default SearchBar;
