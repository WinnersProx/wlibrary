const express = require('express')
const booksController = require('../controllers/books.controller')
const router = express.Router()


router.get('/', booksController.getBooks) 
.get('/books', booksController.getBooks)
.get('/books/:book', booksController.getBook)
.get('/new-book', booksController.newBook)
.post('/new-book', booksController.postBook)
.delete('/books/:book', (req, res) => {

})
.post('/books', (req, res) => {

})


module.exports = router