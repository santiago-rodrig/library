'use strict';

let myLibrary = [];
const bookShelf = document.getElementById('library');
const newBookForm = document.getElementById('new-book-form');
newBookForm.style.display = 'none';

function appendToLibrary(book) {
  myLibrary.push(book);

  return null;
}

function libraryLength() {
  return myLibrary.length;
}

function getLibrary() {
  return myLibrary;
}

populateBookShelfFromStorage();
