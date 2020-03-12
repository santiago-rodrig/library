function setBookFromForm(newBookForm) {
  const title = newBookForm.querySelector('#title').value;
  const author = newBookForm.querySelector('#author').value;
  const pages = newBookForm.querySelector('#pages').value;
  const book = new Book(title, author, pages);

  return book;
}

function createBook() {
  const newBookForm = document.getElementById('new-book-form');
  const book = setBookFromForm(newBookForm);
  const bookShelf = document.getElementById('library');
  appendBookToBookShelf(bookShelf, book);
  clearFieldsAndHide();

  return null;
}

function appendBookToBookShelf(bookShelf, book, index=null, alreadyStored=false) {
  if (!alreadyStored) {
    appendToStorage(book);
    appendToLibrary(book);
    bookShelf.appendChild(bookRowFromBook(book, libraryLength() - 1));
  } else {
    bookShelf.appendChild(bookRowFromBook(book, index, !book.read));
  }

  return null;
}

function appendToStorage(book) {
  const str = `${book.title},${book.author},${book.pages},${book.read}`;
  localStorage.setItem(libraryLength().toString(), str);

  return null;
}

function toggleNewBookForm() {
  let newBookForm = document.getElementById('new-book-form');
  const displayValue = newBookForm.style.display;
  const isNone = displayValue == 'none';
  newBookForm.style.display = isNone ? 'block' : 'none';

  return null;
}

function bookRowFromBook(book, libraryLength, newBook=true) {
  let bookRow = document.createElement('tr');
  let titleData = document.createElement('td');
  let authorData = document.createElement('td');
  let pagesData = document.createElement('td');
  let dataList = [titleData, authorData, pagesData];
  bookRow.setAttribute('data-index', libraryLength.toString());
  setDataText(dataList, book);
  appendDataToRow(bookRow, dataList, newBook);

  return bookRow;
}

function setDataText(dataList, book) {
  const bookValues = [book.title, book.author, book.pages];

  dataList.forEach((data, index) => {
    data.innerText = bookValues[index];
  });

  return null;
}

function appendDataToRow(bookRow, dataList, newBook=true) {
  dataList.forEach(data => {
    bookRow.appendChild(data);
  });

  appendDeleteButtonToRow(bookRow);
  appendReadToggleToRow(bookRow, newBook);

  return null;
}

function appendDeleteButtonToRow(bookRow) {
  let deleteActionData = document.createElement('td');
  let deleteActionButton = document.createElement('button');
  deleteActionButton.type = 'button';
  deleteActionButton.innerText = 'Delete';

  deleteActionButton.addEventListener('click', (e) => {
    let bookRow = e.target.parentNode.parentNode;
    let index = Number(bookRow.getAttribute('data-index'));
    let library = getLibrary();
    library.splice(index, 1);
    e.target.parentNode.parentNode.parentNode.removeChild(bookRow);
    localStorage.removeItem(index.toString());
    updateIndices(index);

    return null;
  });

  deleteActionData.appendChild(deleteActionButton);
  bookRow.appendChild(deleteActionData);

  return null;
}

function updateIndices(index) {
  let library = getLibrary();
  let bookRows = document.querySelectorAll('#library tr');
  let currentIndex, currentValue, lastIndex;

  for (let i = index; i < bookRows.length; i++) {
    currentIndex = Number(bookRows[i].getAttribute('data-index'));
    bookRows[i].setAttribute('data-index', (currentIndex - 1).toString());
  }

  for (let i = index; i < bookRows.length - 1; i++) {
    currentValue = localStorage.getItem((i + 1).toString());
    localStorage.setItem(i.toString(), currentValue);
    lastIndex = i + 1;
  }

  localStorage.removeItem(lastIndex.toString());

  return null;
}

function appendReadToggleToRow(bookRow, newBook=true) {
  let library = getLibrary();
  let toggleReadData = document.createElement('td');
  let toggleReadCheckbox = document.createElement('input');
  toggleReadCheckbox.type = 'checkbox';
  toggleReadCheckbox.checked = newBook ? false : true;

  toggleReadCheckbox.addEventListener('click', (e) => {
    const bookRow = e.target.parentNode.parentNode;
    const index = Number(bookRow.getAttribute('data-index'));
    let library = getLibrary();
    library[index].toggleRead();
    e.target.checked = e.target.checked ? true : false;
    updateReadStatusInStorage(index);
  });

  toggleReadData.appendChild(toggleReadCheckbox);
  bookRow.appendChild(toggleReadData);

  return null;
}

function updateReadStatusInStorage(index) {
  let bookValues = localStorage.getItem(index.toString());
  bookValues = bookValues.split(',');
  const isTrue = bookValues[bookValues.length - 1] == 'true';
  bookValues[bookValues.length - 1] = isTrue ? 'false' : 'true';
  bookValues = bookValues.join(',');
  localStorage.setItem(index.toString(), bookValues);

   return null;
}

function populateBookShelfFromStorage() {
  let library = getLibrary();
  let bookObject;
  const bookShelf = document.getElementById('library');

  for (let i = 0; i < localStorage.length; i++) {
    library.push(localStorage.getItem(i.toString()));
  }

  for (let i = 0; i < library.length; i++) {
    library[i] = createBookFromString(library[i]);
  }

  library.forEach((book, index) => {
    appendBookToBookShelf(bookShelf, book, index, true);
  });

  return null;
}

function createBookFromString(string) {
  const bookValues = string.split(',');
  const title = bookValues[0];
  const author = bookValues[1];
  const pages = Number(bookValues[2]);
  const isFalse = bookValues[3] == 'false';
  const read = isFalse ? false : true;
  let book = new Book(title, author, pages);
  book.read = read;

  return book;
}

function clearFields() {
  let bookShelf = document.getElementById('new-book-form');
  let titleField = bookShelf.querySelector('#title');
  let authorField = bookShelf.querySelector('#author');
  let pagesField = bookShelf.querySelector('#pages');
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
