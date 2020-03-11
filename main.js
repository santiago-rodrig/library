'use strict';

let myLibrary = [];
const library = document.getElementById('library');
const bookForm = document.getElementById('newBookForm');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function isBookIncluded(index) {
  let bookRows = document.querySelectorAll('#library tr');
  let bookRow;

  for (let i = 0; i < bookRows.length; i++) {
    bookRow = bookRows[i];
    if (bookRow.getAttribute('data-index') == index) return true;
  }

  return false;
}

function toggleVision() {
  bookForm.style.visibility = 'visible';
}

function render(books) {
  books.forEach((book, index) => {
    if (isBookIncluded(index)) return;

    let row = document.createElement('tr');
    row.setAttribute('data-index', index.toString());
    let title = document.createElement('td');
    let author = document.createElement('td');
    let pages = document.createElement('td');
    title.innerText = book.title;
    author.innerText = book.author;
    pages.innerText = book.pages;
    row.appendChild(title);
    row.appendChild(author);
    row.appendChild(pages);
    library.appendChild(row);
  });
}

function cancelRequest(event) {
  bookForm.style.visibility = 'hidden';
  clearFields();
}

function clearFields() {
  title.value = '';
  author.value = '';
  pages.value = '';
}

function addBookToLibrary(title, author, pages) {
  let book = new Book(title, author, pages);
  myLibrary.push(book);
}

function sendData(event) {
  addBookToLibrary(title.value, author.value, pages.value);
  render(myLibrary);
  cancelRequest();
}
