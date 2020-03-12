import Book from './book';

function setBookFromForm(newBookForm) {
  const title = newBookForm.querySelector('#title').value;
  const author = newBookForm.querySelector('#author').value;
  const pages = newBookForm.querySelector('#pages').value;
  const book = new Book(title, author, pages);

  return book;
}

function clearFields() {
  const bookShelf = document.getElementById('new-book-form');
  const titleField = bookShelf.querySelector('#title');
  const authorField = bookShelf.querySelector('#author');
  const pagesField = bookShelf.querySelector('#pages');
  titleField.value = '';
  authorField.value = '';
  pagesField.value = '';

  return null;
}

function clearFieldsAndHide() {
  clearFields();
  document.getElementById('new-book-form').style.display = 'none';

  return null;
}

function createBookFromString(string) {
  const bookValues = string.split(',');
  const title = bookValues[0];
  const author = bookValues[1];
  const pages = Number(bookValues[2]);
  const isFalse = bookValues[3] === 'false';
  const read = !isFalse;
  const book = new Book(title, author, pages);
  book.read = read;

  return book;
}

function updateReadStatusInStorage(index) {
  let bookValues = localStorage.getItem(index.toString());
  bookValues = bookValues.split(',');
  const isTrue = bookValues[bookValues.length - 1] === 'true';
  bookValues[bookValues.length - 1] = isTrue ? 'false' : 'true';
  bookValues = bookValues.join(',');
  localStorage.setItem(index.toString(), bookValues);

  return null;
}

function appendReadToggleToRow(bookRow, newBook = true) {
  const toggleReadData = document.createElement('td');
  const toggleReadCheckbox = document.createElement('input');
  toggleReadCheckbox.type = 'checkbox';
  toggleReadCheckbox.checked = !newBook;

  toggleReadCheckbox.addEventListener('click', (e) => {
    const bookRow = e.target.parentNode.parentNode;
    const index = Number(bookRow.getAttribute('data-index'));
    updateReadStatusInStorage(index);
  });

  toggleReadData.appendChild(toggleReadCheckbox);
  bookRow.appendChild(toggleReadData);

  return null;
}

function updateIndices(index) {
  let currentValue; let
    bookRow;

  for (let i = index + 1; i < localStorage.length; i += 1) {
    currentValue = localStorage.getItem(i.toString());
    bookRow = document.querySelector(`tr[data-index="${i}"]`);
    bookRow.setAttribute('data-index', (i - 1).toString());
    localStorage.setItem((i - 1).toString(), currentValue);
  }

  localStorage.removeItem((localStorage.length - 1).toString());

  return null;
}

function appendDeleteButtonToRow(bookRow) {
  const deleteActionData = document.createElement('td');
  const deleteActionButton = document.createElement('button');
  deleteActionButton.type = 'button';
  deleteActionButton.innerText = 'Delete';

  deleteActionButton.addEventListener('click', (e) => {
    const bookRow = e.target.parentNode.parentNode;
    const index = Number(bookRow.getAttribute('data-index'));
    e.target.parentNode.parentNode.parentNode.removeChild(bookRow);
    updateIndices(index);

    return null;
  });

  deleteActionData.appendChild(deleteActionButton);
  bookRow.appendChild(deleteActionData);

  return null;
}

function appendDataToRow(bookRow, dataList, newBook = true) {
  dataList.forEach(data => {
    bookRow.appendChild(data);
  });

  appendDeleteButtonToRow(bookRow);
  appendReadToggleToRow(bookRow, newBook);

  return null;
}

function setDataText(dataList, book) {
  const bookValues = [book.title, book.author, book.pages];

  dataList.forEach((data, index) => {
    data.innerText = bookValues[index];
  });

  return null;
}

function bookRowFromBook(book, libraryLength, newBook = true) {
  const bookRow = document.createElement('tr');
  const titleData = document.createElement('td');
  const authorData = document.createElement('td');
  const pagesData = document.createElement('td');
  const dataList = [titleData, authorData, pagesData];
  bookRow.setAttribute('data-index', libraryLength.toString());
  setDataText(dataList, book);
  appendDataToRow(bookRow, dataList, newBook);

  return bookRow;
}

function appendToStorage(book, libraryLength) {
  const str = `${book.title},${book.author},${book.pages},${book.read}`;
  localStorage.setItem(libraryLength.toString(), str);

  return null;
}

function appendBookToBookShelf(
  bookShelf,
  book,
  libraryLength = null,
  index = null,
  alreadyStored = false,
) {
  if (!alreadyStored) {
    appendToStorage(book, libraryLength);
    bookShelf.appendChild(bookRowFromBook(book, libraryLength));
  } else {
    bookShelf.appendChild(bookRowFromBook(book, index, !book.read));
  }

  return null;
}

function createBook() {
  const newBookForm = document.getElementById('new-book-form');
  const book = setBookFromForm(newBookForm);
  const bookShelf = document.getElementById('library');
  appendBookToBookShelf(bookShelf, book, localStorage.length);
  clearFieldsAndHide();

  return null;
}

function toggleNewBookForm() {
  const newBookForm = document.getElementById('new-book-form');
  const displayValue = newBookForm.style.display;
  const isNone = displayValue === 'none';
  newBookForm.style.display = isNone ? 'block' : 'none';

  return null;
}

function populateBookShelfFromStorage() {
  const library = [];
  const bookShelf = document.getElementById('library');

  for (let i = 0; i < localStorage.length; i += 1) {
    library.push(localStorage.getItem(i.toString()));
  }

  for (let i = 0; i < library.length; i += 1) {
    library[i] = createBookFromString(library[i]);
  }

  library.forEach((book, index) => {
    appendBookToBookShelf(bookShelf, book, null, index, true);
  });

  return null;
}

export {
  createBook,
  toggleNewBookForm,
  populateBookShelfFromStorage,
  clearFieldsAndHide,
};
