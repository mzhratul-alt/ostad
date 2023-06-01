const Books = require("../models/bookModel");

//Get Books
async function getBooks(req, res) {
    try {
        if (req.params.id) {
            const book = await Books.findById(req.params.id);
            res.status(200).json(book);
        } else {
            const books = await Books.find();
            res.status(200).json(books);
        }
    } catch {
        res.status(500).json("Internal Server Error");
    }
}

//Create Book
async function createBook(req, res) {
    try {
        const newBook = new Books(req.body);
        await newBook.save();
        res.status(201).json({
            message: "Book Created Successfully",
        });
    } catch {
        res.status(500).json("Internal Server Error" );
    }
}

//Update a Book
async function updateBook(req,res){
    try{
        await Books.updateOne({_id:req.params.id},{
            title:req.body.title,
            author:req.body.author,
            description:req.body.description,
            publishedYear:req.body.publishedYear,
        })
        res.status(200).json('Book updated Successfully!')
    }catch{
        res.status(500).json("Internal Server Error");
    }
}

//Delete a Book
async function deleteBook(req,res){
    try{
        await Books.deleteOne({_id:req.params.id});
        res.status(200).json("Book deleted successfully!");
    }catch{
        res.status(500).json("Internal Server Error");
    }
}

module.exports = {
    getBooks,
    createBook,
    updateBook,
    deleteBook
};
