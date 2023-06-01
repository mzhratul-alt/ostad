const express = require('express');
const { getBooks, createBook, updateBook, deleteBook } = require('../controllers/bookController');
const router = express.Router();

//Get Books
router.get('/:id?', getBooks)

//Add New Book
router.post('/',createBook)

//Update a Book
router.put('/:id', updateBook)

//Delete a Book
router.delete('/:id', deleteBook)

module.exports = router;