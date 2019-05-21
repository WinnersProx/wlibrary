"use strict";
// This contains all javascript front-end functionality
const addBookRoute = document.querySelector('.add-book-route')
const listBooksBtn = document.querySelector('.list-books-route')
const newBook      = document.querySelector('.save-input button.new-book')
const form     = document.querySelector('form.save-form')
const books         = document.querySelectorAll('.book')
addBookRoute.addEventListener('click', e => {
    history.pushState({}, 'Add Book', '/new-book')
    location.reload();
})
listBooksBtn.addEventListener('click', e => {
    history.pushState({}, 'Add Book', '/books')
    location.reload();
})
// add a new book
form.addEventListener('submit', e => {
    e.preventDefault();
    let elements = e.target.elements;
    // title, author, publisher is the order of our elements
    
    let searchParams = new URLSearchParams()
    elements = Array.from(elements).filter(el => el.getAttribute('class') !== 'new-book')
    .forEach(element => {
        searchParams.append(element.getAttribute('name'), element.value)
    })
    fetch('/new-book', {
        method : 'POST',
        body : searchParams,
        headers : {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'method'       : 'POST'
        }
    }).then(datas => {
        history.pushState({}, 'Book lists', '/books')
        location.reload()
    })
    
    
})
// listen for book view events to present book infos to the user
books.forEach((book, index) => {
    book.addEventListener('click', e => {
        let rbook = parseInt(e.target.parentNode.getAttribute('data-book-key'))
        history.pushState({}, `Show book`, `/books/${rbook}`)
        location.reload()
    })
})

// update the book route
document.querySelector('.update-book-route').addEventListener('click', e => {
    
})

