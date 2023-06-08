const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const checkAuth = require("./middlewares/authMiddleware");

const app = express();
dotenv.config();
//Connect Database
mongoose
    .connect(process.env.DB_CONNECTION_STRING)
    .then(() => console.log("Database connected successfully!"))
    .catch((err) => console.log(err));

const authRouter = require("./routes/authRouter");
app.use("/", authRouter);
//Auth Middleware
app.use(checkAuth);

//Router
const productRouter = require("./routes/productRouter");
app.use("/products", productRouter);
app.listen(process.env.APP_PORT, () =>
    console.log(
        `Application running at ${process.env.APP_HOST}:${process.env.APP_PORT}`
    )
);
