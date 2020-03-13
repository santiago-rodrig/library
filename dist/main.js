/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/book.js":
/*!*********************!*\
  !*** ./src/book.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction Book(title, author, pages) {\n  this.title = title;\n  this.author = author;\n  this.pages = pages;\n  this.read = false;\n}\n\nBook.prototype = {\n  constructor: Book,\n\n  toggleRead() {\n    this.read = !this.read;\n\n    return null;\n  },\n\n  isInLibrary(library) {\n    return library.includes(this);\n  },\n\n  appendToLibrary(library) {\n    return library.concat(this);\n  },\n\n  removeFromLibrary(library) {\n    const index = library.indexOf(this);\n\n    return library.slice(0, index).concat(library.slice(index + 1));\n  },\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Book);\n\n\n//# sourceURL=webpack:///./src/book.js?");

/***/ }),

/***/ "./src/book_management.js":
/*!********************************!*\
  !*** ./src/book_management.js ***!
  \********************************/
/*! exports provided: createBook, toggleNewBookForm, populateBookShelfFromStorage, clearFieldsAndHide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createBook\", function() { return createBook; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleNewBookForm\", function() { return toggleNewBookForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"populateBookShelfFromStorage\", function() { return populateBookShelfFromStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearFieldsAndHide\", function() { return clearFieldsAndHide; });\n/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book */ \"./src/book.js\");\n\n\nfunction setBookFromForm(newBookForm) {\n  const title = newBookForm.querySelector('#title').value;\n  const author = newBookForm.querySelector('#author').value;\n  const pages = newBookForm.querySelector('#pages').value;\n  const book = new _book__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, author, pages);\n\n  return book;\n}\n\nfunction clearFields() {\n  const bookShelf = document.getElementById('new-book-form');\n  const titleField = bookShelf.querySelector('#title');\n  const authorField = bookShelf.querySelector('#author');\n  const pagesField = bookShelf.querySelector('#pages');\n  titleField.value = '';\n  authorField.value = '';\n  pagesField.value = '';\n\n  return null;\n}\n\nfunction clearFieldsAndHide() {\n  clearFields();\n  document.getElementById('new-book-form').style.display = 'none';\n\n  return null;\n}\n\nfunction createBookFromString(string) {\n  const bookValues = string.split(',');\n  const title = bookValues[0];\n  const author = bookValues[1];\n  const pages = Number(bookValues[2]);\n  const isFalse = bookValues[3] === 'false';\n  const read = !isFalse;\n  const book = new _book__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, author, pages);\n  book.read = read;\n\n  return book;\n}\n\nfunction updateReadStatusInStorage(index) {\n  let bookValues = localStorage.getItem(index.toString());\n  bookValues = bookValues.split(',');\n  const isTrue = bookValues[bookValues.length - 1] === 'true';\n  bookValues[bookValues.length - 1] = isTrue ? 'false' : 'true';\n  bookValues = bookValues.join(',');\n  localStorage.setItem(index.toString(), bookValues);\n\n  return null;\n}\n\nfunction appendReadToggleToRow(bookRow, newBook = true) {\n  const toggleReadData = document.createElement('td');\n  const toggleReadCheckbox = document.createElement('input');\n  const checkboxForm = document.createElement('form');\n  const formGroup = document.createElement('div');\n  formGroup.classList.add('form-group');\n  formGroup.classList.add('center-both');\n  toggleReadCheckbox.type = 'checkbox';\n  toggleReadCheckbox.checked = !newBook;\n  toggleReadCheckbox.name = 'read';\n  toggleReadCheckbox.id = 'read';\n  toggleReadCheckbox.classList.add('form-group');\n  toggleReadCheckbox.classList.add('no-margin-bottom');\n  checkboxForm.classList.add('mt-2');\n  checkboxForm.appendChild(formGroup);\n  formGroup.appendChild(toggleReadCheckbox);\n\n  toggleReadCheckbox.addEventListener('click', (e) => {\n    const bookRow = e.target.parentNode.parentNode.parentNode.parentNode;\n    const index = Number(bookRow.getAttribute('data-index'));\n    updateReadStatusInStorage(index);\n  });\n\n  toggleReadData.appendChild(checkboxForm);\n  bookRow.appendChild(toggleReadData);\n\n  return null;\n}\n\nfunction updateIndices(index) {\n  let currentValue; let\n    bookRow;\n\n  for (let i = index + 1; i < localStorage.length; i += 1) {\n    currentValue = localStorage.getItem(i.toString());\n    bookRow = document.querySelector(`tr[data-index=\"${i}\"]`);\n    bookRow.setAttribute('data-index', (i - 1).toString());\n    localStorage.setItem((i - 1).toString(), currentValue);\n  }\n\n  localStorage.removeItem((localStorage.length - 1).toString());\n\n  return null;\n}\n\nfunction appendDeleteButtonToRow(bookRow) {\n  const deleteActionData = document.createElement('td');\n  const deleteActionButton = document.createElement('button');\n  deleteActionButton.type = 'button';\n  deleteActionButton.innerText = 'Delete';\n  deleteActionButton.style.display = 'block';\n  deleteActionButton.classList.add('btn');\n  deleteActionButton.classList.add('btn-sm');\n  deleteActionButton.classList.add('btn-danger');\n  deleteActionButton.classList.add('center-x');\n\n  deleteActionButton.addEventListener('click', (e) => {\n    const bookRow = e.target.parentNode.parentNode;\n    const index = Number(bookRow.getAttribute('data-index'));\n    e.target.parentNode.parentNode.parentNode.removeChild(bookRow);\n    updateIndices(index);\n\n    return null;\n  });\n\n  deleteActionData.appendChild(deleteActionButton);\n  bookRow.appendChild(deleteActionData);\n\n  return null;\n}\n\nfunction appendDataToRow(bookRow, dataList, newBook = true) {\n  dataList.forEach(data => {\n    bookRow.appendChild(data);\n  });\n\n  appendDeleteButtonToRow(bookRow);\n  appendReadToggleToRow(bookRow, newBook);\n\n  return null;\n}\n\nfunction setDataText(dataList, book) {\n  const bookValues = [book.title, book.author, book.pages];\n\n  dataList.forEach((data, index) => {\n    data.innerText = bookValues[index];\n  });\n\n  return null;\n}\n\nfunction bookRowFromBook(book, libraryLength, newBook = true) {\n  const bookRow = document.createElement('tr');\n  const titleData = document.createElement('td');\n  const authorData = document.createElement('td');\n  const pagesData = document.createElement('td');\n  const dataList = [titleData, authorData, pagesData];\n  bookRow.setAttribute('data-index', libraryLength.toString());\n  setDataText(dataList, book);\n  appendDataToRow(bookRow, dataList, newBook);\n\n  return bookRow;\n}\n\nfunction appendToStorage(book, libraryLength) {\n  const str = `${book.title},${book.author},${book.pages},${book.read}`;\n  localStorage.setItem(libraryLength.toString(), str);\n\n  return null;\n}\n\nfunction appendBookToBookShelf(\n  bookShelf,\n  book,\n  libraryLength = null,\n  index = null,\n  alreadyStored = false,\n) {\n  if (!alreadyStored) {\n    appendToStorage(book, libraryLength);\n    bookShelf.appendChild(bookRowFromBook(book, libraryLength));\n  } else {\n    bookShelf.appendChild(bookRowFromBook(book, index, !book.read));\n  }\n\n  return null;\n}\n\nfunction createBook() {\n  const newBookForm = document.getElementById('new-book-form');\n  const book = setBookFromForm(newBookForm);\n  const bookShelf = document.getElementById('library');\n  appendBookToBookShelf(bookShelf, book, localStorage.length);\n  clearFieldsAndHide();\n\n  return null;\n}\n\nfunction toggleNewBookForm() {\n  const newBookForm = document.getElementById('new-book-form');\n  const displayValue = newBookForm.style.display;\n  const isNone = displayValue === 'none';\n  newBookForm.style.display = isNone ? 'block' : 'none';\n\n  return null;\n}\n\nfunction populateBookShelfFromStorage() {\n  const library = [];\n  const bookShelf = document.getElementById('library');\n\n  for (let i = 0; i < localStorage.length; i += 1) {\n    library.push(localStorage.getItem(i.toString()));\n  }\n\n  for (let i = 0; i < library.length; i += 1) {\n    library[i] = createBookFromString(library[i]);\n  }\n\n  library.forEach((book, index) => {\n    appendBookToBookShelf(bookShelf, book, null, index, true);\n  });\n\n  return null;\n}\n\n\n\n\n//# sourceURL=webpack:///./src/book_management.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _book_management__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book_management */ \"./src/book_management.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const newBookForm = document.getElementById('new-book-form');\n  const toggleFormButton = document.getElementById('new-book');\n  const createBookButton = document.getElementById('new-book-create');\n  const cancelBookButton = document.getElementById('new-book-cancel');\n  newBookForm.style.display = 'none';\n  Object(_book_management__WEBPACK_IMPORTED_MODULE_0__[\"populateBookShelfFromStorage\"])();\n  toggleFormButton.addEventListener('click', _book_management__WEBPACK_IMPORTED_MODULE_0__[\"toggleNewBookForm\"]);\n  createBookButton.addEventListener('click', _book_management__WEBPACK_IMPORTED_MODULE_0__[\"createBook\"]);\n  cancelBookButton.addEventListener('click', _book_management__WEBPACK_IMPORTED_MODULE_0__[\"clearFieldsAndHide\"]);\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });