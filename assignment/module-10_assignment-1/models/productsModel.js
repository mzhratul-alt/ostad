const mongoose = require("mongoose");

const productsSchema = mongoose.Schema(
    {
        name: String,
        price: Number,
        description: String,
        createdAt:Date
    }
);

const Product = mongoose.model('Product', productsSchema);

module.exports = Product