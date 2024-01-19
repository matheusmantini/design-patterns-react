import cors from "cors";
import express, { json } from "express";

const app = express();

app.use(json());
app.use(cors());

<<<<<<< HEAD
export let currentUser = {
=======
let currentUser = {
  id: "1",
>>>>>>> hocs
  name: "Sarah Waters",
  age: 55,
  country: "United Kingdom",
  books: ["Fingersmith", "The Night Watch"],
};

let users = [
  {
<<<<<<< HEAD
    id: 1,
=======
    id: "1",
>>>>>>> hocs
    name: "Sarah Waters",
    age: 55,
    country: "United Kingdom",
    books: ["Fingersmith", "The Night Watch"],
  },
  {
<<<<<<< HEAD
    id: 2,
=======
    id: "2",
>>>>>>> hocs
    name: "Haruki Murakami",
    age: 71,
    country: "Japan",
    books: ["Norwegian Wood", "Kafka on the Shore"],
  },
  {
<<<<<<< HEAD
    id: 3,
=======
    id: "3",
>>>>>>> hocs
    name: "Chimamanda Ngozi Adichie",
    age: 43,
    country: "Nigeria",
    books: ["Half of a Yellow Sun", "Americanah"],
  },
];

let books = [
  {
<<<<<<< HEAD
    id: 1,
=======
    id: "1",
>>>>>>> hocs
    name: "To Kill a Mockingbird",
    pages: 281,
    title: "Harper Lee",
    price: 12.99,
  },
  {
<<<<<<< HEAD
    id: 2,
=======
    id: "2",
>>>>>>> hocs
    name: "The Catcher in the Rye",
    pages: 224,
    title: "J.D. Salinger",
    price: 9.99,
  },
  {
<<<<<<< HEAD
    id: 3,
=======
    id: "3",
>>>>>>> hocs
    name: "The Little Prince",
    pages: 85,
    title: "Antoine de Saint-Exupéry",
    price: 7.99,
  },
];

app.get("/current-user", (req, res) => res.json(currentUser));

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
<<<<<<< HEAD
  res.json(users.find((user) => user.id === +id));
=======
  res.json(users.find((user) => user.id === id));
>>>>>>> hocs
});

app.get("/users", (req, res) => res.json(users));

app.post("/users/:id", (req, res) => {
  const { id } = req.params;
  const { user: editedUser } = req.body;

<<<<<<< HEAD
  users = users.map((user) => (user.id === +id ? editedUser : user));

  res.json(users.find((user) => user.id === +id));
=======
  users = users.map((user) => (user.id === id ? editedUser : user));

  res.json(users.find((user) => user.id === id));
>>>>>>> hocs
});

app.get("/books", (req, res) => res.json(books));

app.get("/books/:id", (req, res) => {
  const { id } = req.params;
<<<<<<< HEAD
  res.json(books.find((book) => book.id === +id));
=======
  res.json(books.find((book) => book.id === id));
>>>>>>> hocs
});

let SERVER_PORT = 9090;
app.listen(SERVER_PORT, () =>
  console.log(`Server is listening on port: ${SERVER_PORT}`)
);
