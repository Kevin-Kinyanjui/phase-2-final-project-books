import React from "react";

function SearchBar({ onSearch }) {
  function handleSearch(event) {
    onSearch(event.target.value);
  }

  return (
    <>
      <div class="search-container">
        <input
          type="text"
          onChange={handleSearch}
          class="search-input"
          placeholder="Search..."
        />
      </div>
    </>
  );
}

export default SearchBar;
