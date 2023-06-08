const Product = require("../models/productsModel");

async function getAllProduct(req, res) {
    let products = await Product.find({}, { name: 1, price: 1, _id: 0 });
    res.status(200).json(products);
}
module.exports = {
    getAllProduct,
};
