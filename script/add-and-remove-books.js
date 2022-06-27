const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
const addBook = document.querySelector('#add-book');

let bookArray = [];

addBook = function(){
    const bookCollections = {
        title: bookTitle.value,
        author: bookAuthor.value
    }
}

bookArray.unshift(bookCollections);