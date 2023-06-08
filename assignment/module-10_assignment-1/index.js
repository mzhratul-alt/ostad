const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");

const app = express();
dotenv.config();
//Connect Database
mongoose
    .connect(process.env.DB_CONNECTION_STRING)
    .then(() => console.log("Database connected successfully!"))
    .catch((err) => console.log(err));

//Router
const authRouter = require("./routes/authRouter");
const productRouter = require("./routes/productRouter");
app.use('/', authRouter)
app.use('/products', productRouter)
app.listen(process.env.APP_PORT, () =>
    console.log(
        `Application running at ${process.env.APP_HOST}:${process.env.APP_PORT}`
    )
);
