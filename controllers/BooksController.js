const Book = require('../models/Book');
const store = require('../store/store');

class BooksController {
  getBooks(req, res) {
    const data = store;
    res.status(200).json({
      success: true,
      data,
    });
  }

  getBook(req, res) {
    const { id } = req.params;
    const book = store.find((item) => item.id === id);
    if (book) {
      res.status(200).json({
        success: true,
        data,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Book not found',
      });
    }
  }

  createBook(req, res) {
    const {
      title,
      description,
      authors,
      favorite,
      fileCover,
      fileName,
    } = req.body;
    const book = new Book(
      title,
      description,
      authors,
      favorite,
      fileCover,
      fileName
    );
    store.push(book);
    res.status(201).json({
      success: true,
      data: book,
    });
  }

  updateBook(req, res) {
    const {
      title,
      description,
      authors,
      favorite,
      fileCover,
      fileName,
    } = req.body;
    const { id } = req.params;
    const updateBookIndex = store.findIndex((item) => item.id === id);
    if (updateBookIndex !== -1) {
      store[updateBookIndex] = {
        ...store[updateBookIndex],
        title,
        description,
        authors,
        favorite,
        fileCover,
        fileName,
      };
      res.status(200).json({
        success: true,
        data: store[updateBookIndex],
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Book not found',
      });
    }
  }

  deleteBook(req, res) {
    const { id } = req.params;
    const deleteBookIndex = store.findIndex((item) => item.id === id);
    if (deleteBookIndex !== -1) {
      store.splice(deleteBookIndex, 1);
      res.status(200).json({
        success: true,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Book not found',
      });
    }
  }
}

module.exports = new BooksController();
