const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
const addBook = document.querySelector('#add-button');

const bookArray = [];

// eslint-disable-next-line no-unused-vars
const remove = function (addBook) {
  const bookCollections = {
    title: bookTitle.value,
    author: bookAuthor.value,
  };
  document.querySelector('form').removeChild(addBook.parentNode);
  bookArray.pop(bookCollections);
  localStorage.removeItem('Book Title', bookTitle.value);
  localStorage.removeItem('Book Author', bookAuthor.value);
};
function add() {
  return `
    <h4>${bookTitle.value}</h4>
    <h4>${bookAuthor.value}</h4>
    <button onclick = remove(this)>Remove Book</button><hr>
    `;
}
addBook.onclick = function (e) {
  e.preventDefault();
  const div = document.createElement('div');
  div.innerHTML = add();
  document.querySelector('form').prepend(div);
  const bookCollections = {
    title: bookTitle.value,
    author: bookAuthor.value,
  };

  bookArray.unshift(bookCollections);
  localStorage.setItem('Book Title', bookTitle.value);
  localStorage.setItem('Book Author', bookAuthor.value);
};
