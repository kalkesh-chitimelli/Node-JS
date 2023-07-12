import {
  getAllBooks,
  getBookByAuthor,
  deleteBookByAuthor,
  addBook,
} from "../services/books.js";

const getAllBooksController = async (req, res) => {
  const allBooks = await getAllBooks();
  res.send(allBooks);
};

const getBookByAuthorController = async (req, res) => {
  const { authorName } = req.params;
  const bookFound = await getBookByAuthor(authorName);
  res.send(bookFound);
};

const deleteBookController = async (req, res) => {
  const { authorName } = req.params;

  const listAfterDeleteBook = await deleteBookByAuthor(authorName);
  res.send(listAfterDeleteBook);
};

const addBookController = async (req, res) => {
  const listAfterBookAdded = await addBook(req.body);
  res.send(listAfterBookAdded);
};

export {
  getAllBooksController,
  getBookByAuthorController,
  deleteBookController,
  addBookController,
};
