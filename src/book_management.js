function setBookFromForm(newBookForm) {
  const title = newBookForm.querySelector('#title').value;
  const author = newBookForm.querySelector('#author').value;
  const pages = newBookForm.querySelector('#pages').value;
  const book = [title, author, pages, 'false'].join(',');

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

function updateReadStatusInStorage(index) {
  const library = localStorage.getItem('library').split(';');
  let bookValues = library[index];
  bookValues = bookValues.split(',');
  const isTrue = bookValues[bookValues.length - 1] === 'true';
  bookValues[bookValues.length - 1] = isTrue ? 'false' : 'true';
  bookValues = bookValues.join(',');
  library[index] = bookValues;
  library.join(';');
  localStorage.setItem('library', library);

  return null;
}

function appendReadToggleToRow(bookRow, bookRead = false) {
  const toggleReadData = document.createElement('td');
  const toggleReadCheckbox = document.createElement('input');
  const checkboxForm = document.createElement('form');
  const formGroup = document.createElement('div');
  formGroup.classList.add('form-group');
  formGroup.classList.add('center-both');
  toggleReadCheckbox.type = 'checkbox';
  toggleReadCheckbox.checked = bookRead;
  toggleReadCheckbox.name = 'read';
  toggleReadCheckbox.id = 'read';
  toggleReadCheckbox.classList.add('form-group');
  toggleReadCheckbox.classList.add('no-margin-bottom');
  checkboxForm.classList.add('mt-2');
  checkboxForm.appendChild(formGroup);
  formGroup.appendChild(toggleReadCheckbox);

  toggleReadCheckbox.addEventListener('click', (e) => {
    const bookRow = e.target.parentNode.parentNode.parentNode.parentNode;
    const index = Number(bookRow.getAttribute('data-index'));
    updateReadStatusInStorage(index);
  });

  toggleReadData.appendChild(checkboxForm);
  bookRow.appendChild(toggleReadData);

  return null;
}

function updateIndices(index) {
  let bookRow; let
    library;
  library = localStorage.getItem('library');
  library = library.split(';');

  for (let i = index + 1; i < library.length; i += 1) {
    bookRow = document.querySelector(`tr[data-index="${i}"]`);
    bookRow.setAttribute('data-index', (i - 1).toString());
  }

  library.splice(index, 1);
  library = library.join(';');
  localStorage.setItem('library', library);

  return null;
}

function appendDeleteButtonToRow(bookRow) {
  const deleteActionData = document.createElement('td');
  const deleteActionButton = document.createElement('button');
  const deleteActionForm = document.createElement('form');
  deleteActionButton.type = 'button';
  deleteActionButton.innerText = 'Delete';
  deleteActionButton.style.display = 'block';
  deleteActionButton.classList.add('btn');
  deleteActionButton.classList.add('btn-sm');
  deleteActionButton.classList.add('btn-danger');
  deleteActionButton.classList.add('center-x');

  deleteActionButton.addEventListener('click', (e) => {
    const bookRow = e.target.parentNode.parentNode.parentNode;
    const index = Number(bookRow.getAttribute('data-index'));
    bookRow.parentNode.removeChild(bookRow);
    updateIndices(index);

    return null;
  });

  deleteActionForm.appendChild(deleteActionButton);
  deleteActionData.appendChild(deleteActionForm);
  bookRow.appendChild(deleteActionData);

  return null;
}

function appendDataToRow(bookRow, dataList, bookRead = false) {
  dataList.forEach(data => {
    bookRow.appendChild(data);
  });

  appendDeleteButtonToRow(bookRow);
  appendReadToggleToRow(bookRow, bookRead);

  return null;
}

function setDataText(dataList, book) {
  const bookValues = book.split(',').slice(0, 3);

  dataList.forEach((data, index) => {
    data.innerText = bookValues[index];
  });

  return null;
}

function bookRowFromBook(book, index, bookRead = false) {
  const storageLibrary = localStorage.getItem('library').split(';');

  if (index === null) {
    index = storageLibrary.length - 1;
  }

  const bookRow = document.createElement('tr');
  const titleData = document.createElement('td');
  const authorData = document.createElement('td');
  const pagesData = document.createElement('td');
  const dataList = [titleData, authorData, pagesData];
  bookRow.setAttribute('data-index', index);
  setDataText(dataList, book);
  appendDataToRow(bookRow, dataList, bookRead);

  return bookRow;
}

function appendToStorage(book) {
  if (localStorage.getItem('library')) {
    let storageLibrary = localStorage.getItem('library');
    storageLibrary = storageLibrary.split(';');
    storageLibrary.push(book);

    localStorage.setItem('library', storageLibrary.join(';'));
  } else {
    localStorage.setItem('library', book);
  }

  return null;
}

function appendBookToBookShelf(
  book,
  index = null,
  alreadyStored = false,
) {
  const bookShelf = document.getElementById('library');

  if (!alreadyStored) {
    appendToStorage(book);
    bookShelf.appendChild(bookRowFromBook(book, index));
  } else {
    bookShelf.appendChild(bookRowFromBook(book, index, book.read));
  }

  return null;
}

function createBook() {
  const newBookForm = document.getElementById('new-book-form');
  const book = setBookFromForm(newBookForm);
  appendBookToBookShelf(book);
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

function purifyLibrary() {
  const library = localStorage.getItem('library');

  if (!library) return null;

  const correctFormat = /[\w\s]+,[\w\s]+,\d+,(true|false);?/gi;

  if (correctFormat.test(library)) return null;

  localStorage.removeItem('library');

  return null;
}

function populateBookShelfFromStorage() {
  purifyLibrary();
  let storageLibrary = localStorage.getItem('library');

  if (storageLibrary) {
    storageLibrary = storageLibrary.split(';');

    storageLibrary.forEach((book, index) => {
      appendBookToBookShelf(book, index, true);
    });
  }

  return null;
}

export {
  createBook,
  toggleNewBookForm,
  populateBookShelfFromStorage,
  clearFieldsAndHide,
};
