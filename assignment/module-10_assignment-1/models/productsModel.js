const mongoose = require("mongoose");

const productsSchema = mongoose.Schema(
    {
        name: String,
        price: Number,
        description: String,
        createdAt:Date
    }
);

const productModel = mongoose.model('Product', productsSchema);

module.exports = {
    productModel
}