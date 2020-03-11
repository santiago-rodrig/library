'use strict';

let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function render(books) {
  let library = document.getElementById('library');

  books.forEach(book => {
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
    library.appendChild(row);
  });
}

function addBookToLibrary(title, author, pages) {
  let book = new Book(title, author, pages);
  myLibrary.push(book);
}

addBookToLibrary('Red book', 'Sharmarke', 245);
addBookToLibrary('Orange book', 'Santiago', 415);
addBookToLibrary('Purple book', 'Samuel', 525);

render(myLibrary);
