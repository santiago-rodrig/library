import {
  setBookFromForm,
  createBook,
  appendBookToBookShelf,
  appendToStorage,
  toggleNewBookForm,
  bookRowFromBook,
  setDataText,
  appendDataToRow,
  appendDeleteButtonToRow,
  updateIndices,
  appendReadToggleToRow,
  updateReadStatusInStorage,
  populateBookShelfFromStorage,
  createBookFromString,
  clearFields,
  clearFieldsAndHide
} from './functions/book_management.js';

document.addEventListener('DOMContentLoaded', () => {
  const newBookForm = document.getElementById('new-book-form');
  const toggleFormButton = document.getElementById('new-book');
  const createBookButton = document.getElementById('new-book-create');
  const cancelBookButton = document.getElementById('new-book-cancel');
  populateBookShelfFromStorage();
  newBookForm.style.display = 'none';
  toggleFormButton.addEventListener('click', toggleNewBookForm);
  createBookButton.addEventListener('click', createBook);
  cancelBookButton.addEventListener('click', clearFieldsAndHide);
});
