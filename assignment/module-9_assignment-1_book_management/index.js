//External Import
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express()
dotenv.config();

//Internal Import

//Database Connection
mongoose
.connect(process.env.DB_STRING,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>console.log('Database Connected Successfully!'))
.catch((err)=>console.log(err));

//Request Parser
app.use(express.json())

//Books Route
const bookRoutes = require('./routes/bookRoutes');
app.use('/books', bookRoutes);

//404 Not Found Middleware
const notFoundHandler = require('./middlewares/notFoundMiddleware');
app.use(notFoundHandler)



app.listen(process.env.PORT, () => console.log(`Application running at http://${process.env.HOST}:${process.env.PORT}`))