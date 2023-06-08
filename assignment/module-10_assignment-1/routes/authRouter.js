const { Router } = require("express");
const generateToken = require("../controllers/authController");
const router = Router();

router.get("/", generateToken(1, process.env.JWT_SECRET));

module.exports = router;
