function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false;
}

Book.prototype = {
  constructor: Book,

  toggleRead() {
    this.read = !this.read;

    return null;
  },

  isInLibrary(library) {
    return library.includes(this);
  },

  appendToLibrary(library) {
    return library.concat(this);
  },

  removeFromLibrary(library) {
    const index = library.indexOf(this);

    return library.slice(0, index).concat(library.slice(index + 1));
  },
};

export { Book };
