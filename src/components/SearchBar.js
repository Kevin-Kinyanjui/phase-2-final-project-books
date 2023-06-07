import React from "react";
const books = [
  { title: "Book A", author: "Author A" },
  { title: "Book B", author: "Author B" },
  { title: "Book C", author: "Author C" },
];

function SearchBar() {
  const searchInput = document.getElementById("searchInput").value;
  const searchResult = document.getElementById("searchResult");
  const filteredBooks = books.filter(book =>
      book.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    if (filteredBooks.length === 0) {
      searchResult.innerHTML = "No books found.";
    } else {
      filteredBooks.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.innerHTML = `<strong>Title:</strong> ${book.title}<br><strong>Author:</strong> ${book.author}<br><br>`;
        searchResult.appendChild(bookDiv);
      });
    }
  
  const searchButton = document.getElementById("searchButton");
   searchButton.addEventListener("click", SearchBar);

  return (
    <>
      <div class="search-container">
        <input type="text" class="search-input" placeholder="Search..." />
      </div>
    </>
  );
}


export default SearchBar;
