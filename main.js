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
    let deleteCol = document.createElement('td');
    let deleteButton = document.createElement('button');
    deleteButton.innerText = "Delete";
    deleteButton.setAttribute('data-index', index.toString());
    deleteButton.setAttribute('onclick', 'deleteBook(event)');
    title.innerText = book.title;
    author.innerText = book.author;
    pages.innerText = book.pages;
    deleteCol.appendChild(deleteButton);
    row.appendChild(title);
    row.appendChild(author);
    row.appendChild(pages);
    row.appendChild(deleteCol);
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

function deleteBook(e){
  const index = Number(e.target.getAttribute('data-index'));
  const book = document.querySelector(`#library tr[data-index="${index}"]`);
  library.removeChild(book);
  myLibrary.splice(index, 1);
  console.log(myLibrary);
}

function sendData(event) {
  addBookToLibrary(title.value, author.value, pages.value);
  render(myLibrary);
  cancelRequest();
  console.log(myLibrary);
}
