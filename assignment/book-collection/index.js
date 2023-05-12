const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());
const port = 3000;
const host = "127.0.0.1";

//Root Route
app.get("/", (req, res) => {
  fs.readFile("index.html", (err, data) => {
    if (err) {
      console.log(err);
      return;
    } else {
      res.writeHeader(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});

//Book List

let booksList = [];
app.get("/books", (req, res) => {
  res.json(booksList);
  res.end();
});

//Add Book

app.post("/books", (req, res) => {
  const { title, author, publishedDate } = req.body;

  const id = String(booksList.length + 1).padStart(8, "0");

  let newBook = {
    id: id,
    title: title,
    author: author,
    publishedDate: publishedDate,
  };

  booksList.push(newBook);

  res.status(201);
  res.send("Book has been added successfully");
});

//Delete Books
app.delete("/books/:id", (req, res) => {
  let id = req.params.id;
  let newBooksList = booksList.filter((book) => {
    return book.id != id;
  });

  booksList = newBooksList;

  res.status(200);
  res.json({
    message: "The Book has been successfully Deleted !",
  });
});

app.listen(port, host, () =>
  console.log(`Server running at http://${host}:${port}`)
);
