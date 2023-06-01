const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        description: String,
        publishedYear: Number,
    },
    {
        timestamps: true,
    }
);

const Books = mongoose.model('Book', bookSchema);
module.exports = Books;