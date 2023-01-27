const bookCollections = document.getElementById("collections");
console.log(bookCollections);

//fetch books
const loadBooks = async () => {
  const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=83MDx82GLzximvSwJoHjHC62Ul3l0qWG`;
  const res = await fetch(url);
  const data = await res.json();
  displayBooks(data.results.books);
};
loadBooks();

const displayBooks = (books) => {
  books.map((book) => {
    console.log(book);
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("bookDiv");
    bookDiv.innerHTML = `
            <img
            style="height: 265px; width: 190px"
            src=${book.book_image}
            alt="book"
            />
          <div>
            <p class="book-title">${book.title}</p>
            <p class="book-price">$${book.price}</p>
          </div>
    `;
    bookCollections.appendChild(bookDiv);
  });
};
