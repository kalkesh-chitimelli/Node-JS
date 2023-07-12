import { readFile, writeFile } from "node:fs/promises";
import _ from "lodash";

const getAllBooks = async () => {
  const books = await readFile("books.json");
  return JSON.parse(books);
};

const getBookByAuthor = async (author) => {
  const books = await getAllBooks();
  const bookFound = _.find(books, (book) => book.author == author);
  if (bookFound) {
    return bookFound;
  } else {
    return "Author Not Found";
  }
};

const deleteBookByAuthor = async (author) => {
  const books = await getAllBooks();
  const bookFound = _.find(books, (book) => book.author == author);
  if (bookFound) {
    _.remove(books, (book) => book.author == author);
    await writeFile("books.json", JSON.stringify(books));
    return books;
  } else {
    return "Author Not Found";
  }
};

const addBook = async (data) => {
  const books = await getAllBooks();
  books.push(data);
  await writeFile("books.json", JSON.stringify(books));
  return books;
};

export { getAllBooks, getBookByAuthor, deleteBookByAuthor, addBook };
