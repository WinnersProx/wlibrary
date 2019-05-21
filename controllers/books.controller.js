let books = require('../models/books.model')
let express = require('express')
let eRouter = express.Router()
const booksController = {

    getBooks : (req, res) => {
        console.log(books)
        res.render('books', { books : books})
    },
    getBook : (req, res) => {
        book = books[parseInt(req.params.book)]
        res.render('book', {book : book})
    },
    newBook : (req, res) => {
        res.render('new-book')
    },
    postBook : (req, res) => {
        console.log(req.body.title)
        books.unshift(req.body)
        res.send(req.body)
    }

}
module.exports =  booksController;