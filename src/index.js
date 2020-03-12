import {
  createBook,
  toggleNewBookForm,
  populateBookShelfFromStorage,
  clearFieldsAndHide,
} from './book_management';

document.addEventListener('DOMContentLoaded', () => {
  const newBookForm = document.getElementById('new-book-form');
  const toggleFormButton = document.getElementById('new-book');
  const createBookButton = document.getElementById('new-book-create');
  const cancelBookButton = document.getElementById('new-book-cancel');
  newBookForm.style.display = 'none';
  populateBookShelfFromStorage();
  toggleFormButton.addEventListener('click', toggleNewBookForm);
  createBookButton.addEventListener('click', createBook);
  cancelBookButton.addEventListener('click', clearFieldsAndHide);
});
