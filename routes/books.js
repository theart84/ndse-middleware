const express = require('express');
const BooksController = require('../controllers/BooksController');
const router = express.Router();

router.get('/books', BooksController.getBooks); // роут для получения всех книг
router.get('/books/:id', BooksController.getBook); // роут для получения книги по id
router.post('/books', BooksController.createBook); // роут для создания книги
router.put('/books/:id', BooksController.updateBook); // роут для редактирования книги
router.delete('/books/:id', BooksController.deleteBook); // роут для удаления книги

module.exports = router;
