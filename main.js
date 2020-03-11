'use strict';

let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function render(books) {
  let library = document.getElementById('library');
  books.forEach((book, index) => {
    let row = document.createElement('tr');
    let title = document.createElement('td');
    let author = document.createElement('td');
    let pages = document.createElement('td');
    title.innerText = book.title;
    author.innerText = book.author;
    pages.innerText = book.pages;
    row.appendChild(title);
    row.appendChild(author);
    row.appendChild(pages);
    row.setAttribute('data-index', index);
    library.appendChild(row);
  });
}

function addBookToLibrary(title, author, pages) {
  let book = new Book(title, author, pages);
  myLibrary.push(book);
}

function sendData(){
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  addBookToLibrary(title, author, pages);
  render(myLibrary);
}

addBookToLibrary('Red book', 'Sharmarke', 245);
addBookToLibrary('Orange book', 'Santiago', 415);
addBookToLibrary('Purple book', 'Samuel', 525);

render(myLibrary);
