const bookTitle = document.querySelector("#book-title");
const bookAuthor = document.querySelector("#book-author");
const addBook = document.querySelector("#add-button");

const bookArray = [];

function add() {
  return `
        <input type="text" placeholder="Book Title" id ="book-title" value = ${JSON.stringify(
          bookTitle.value
        )}><br><br>
          <input type="text" placeholder="Book Author" id = "book-author" value = ${JSON.stringify(
            bookAuthor.value
          )}><br><br>
          <button onclick = remove(this)>Remove Book</button><hr>

    `;
}

addBook.onclick = function (e) {
  e.preventDefault(); 
  let div = document.createElement('div');
  div.innerHTML = add();
  document.querySelector("form").prepend(div);
  const bookCollections = {
    title: bookTitle.value,
    author: bookAuthor.value
  };

  bookArray.unshift(bookCollections);

  localStorage.setItem("Book Title", bookTitle.value);
  localStorage.setItem("Book Author", bookAuthor.value);
};

function remove(addBook) {
  const bookCollections = {
    title: bookTitle.value,
    author: bookAuthor.value
  };
  document.querySelector("form").removeChild(addBook.parentNode);
  bookArrayPop = bookArray.pop(bookCollections);

  localStorage.removeItem("Book Title", bookTitle.value);
  localStorage.removeItem("Book Author", bookAuthor.value);
}
