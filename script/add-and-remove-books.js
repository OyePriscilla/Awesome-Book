const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
const addBook = document.querySelector('#add-button');


const bookArray = [];
let bookCollections;

// const bookCollections = {
//   title: bookTitle.value,
//   author: bookAuthor.value,
// };

// // eslint-disable-next-line no-unused-vars
// function remove(addBook) {

// };
// function add() {

// }
// addBook.onclick = function (e) {
//   e.preventDefault();

// };

class Booktitleandauthor {
  constructor (bookTitle, bookAuthor) {
    this.bookTitle = bookTitle;
    this.bookAuthor = bookAuthor;
  }
  add() {
    const div = document.createElement('div');
    document.querySelector('form').prepend(div);
    bookArray.unshift(bookCollections);
    localStorage.setItem('Book Title', bookTitle.value);
    localStorage.setItem('Book Author', bookAuthor.value);
    div.innerHTML =
   `
    <h4>${JSON.stringify(bookTitle.value)} by ${bookAuthor.value} </h4>
    <button onclick = remove(this)>Remove Book</button><hr>
    `;
  }
  remove(addBook) {
    document.querySelector('.book-form').removeChild(addBook.parentNode);
    bookArray.pop(bookCollections);
    localStorage.removeItem('Book Title', bookTitle.value);
    localStorage.removeItem('Book Author', bookAuthor.value);
  }
}

const addBookTA = new Booktitleandauthor (bookTitle.value, bookAuthor.value);

console.log(addBookTA);

addBookTA.add();

addBookTA.remove();