const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
const addBook = document.querySelector('#add-book');
const removeBook = document.querySelectorAll('.remove-book');
/* const bookList = document.querySelector('.book-list'); */
const bookForm = document.querySelector('.book-form');
const bookList = document.createElement('div');

let bookArray = [];

let bookCollections;

addBook.onclick = function(e){
    e.preventDefault();

    bookCollections = {
      title: bookTitle.value,
      author: bookAuthor.value
    }
  bookArray.unshift(bookCollections);
  console.log(bookArray);

  
  bookList.innerHTML = `
    <input type="text" id="book-title" placeholder="Title" value="${bookCollections.title}"><br>
    <input type="text" id="book-author" placeholder="Authorr" value="${bookCollections.author}"><br>
    <button class="remove-book" id="remove-book">Remove Book</button><hr>
  `;

    console.log(bookList);
    bookForm.appendChild(bookList);
}

removeBook.onclick = function(e){
  e.preventDefault();

  bookCollections = {
    title: bookTitle.value,
    author: bookAuthor.value
  }

  bookArray.pop(bookCollections);
  console.log(bookArray);
}
