const { Router } = require("express");
const { getAllProduct } = require("../controllers/productsController");
const router = Router();

router.get("/", getAllProduct);

module.exports = router;
