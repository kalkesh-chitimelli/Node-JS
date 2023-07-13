//import { readFile, writeFile } from "node:fs/promises";
import _ from "lodash";
import { booksModel } from "../models/books.js";

const getAllBooks = async () => {
  try {
    //const books = await readFile("books.json");
    const books = await booksModel.find().lean();
    //console.log(books);
    return books;
  } catch (error) {
    return error.message;
  }
};

const getBookByAuthor = async (author) => {
  // const books = await getAllBooks();
  // const bookFound = _.filter(books, (book) => book.author == author);
  try {
    const bookFound = await booksModel.find({ author: author });

    if (bookFound) {
      return bookFound;
    } else {
      throw new Error("Author Not Found");
    }
  } catch (error) {
    return error.message;
  }
};

const deleteBookByAuthor = async (author) => {
  // const books = await getAllBooks();
  // const bookFound = _.find(books, (book) => book.author == author);
  try {
    const bookFound = await booksModel.find({ author: author });

    if (bookFound) {
      //_.remove(books, (book) => book.author == author);
      //await writeFile("books.json", JSON.stringify(books));

      await booksModel.deleteOne({ author: author });

      return "Item deleted successfully";
    } else {
      throw new Error("Author Not Found");
    }
  } catch (error) {
    return error.message;
  }
};

const addBook = async (data) => {
  try {
    //const books = await getAllBooks();
    //books.push(data);
    //await writeFile("books.json", JSON.stringify(books));
    const books = await booksModel.create(data);
    return books;
  } catch (error) {
    return error.message;
  }
};

const getBookById = async (id) => {
  // const books = await getAllBooks();
  // const bookFound = _.filter(books, (book) => book.id == id);
  try {
    const bookFound = await booksModel.findById(id);
    console.log(bookFound);
    if (bookFound) {
      return bookFound;
    } else {
      throw new Error("Book of given Id is  Not Found");
    }
  } catch (error) {
    return error.message;
  }
};

const deleteBookById = async (id) => {
  // const books = await getAllBooks();
  // const bookFound = _.find(books, (book) => book.author == author);
  try {
    const bookFound = await booksModel.findById(id);

    if (bookFound) {
      //_.remove(books, (book) => book.author == author);
      //await writeFile("books.json", JSON.stringify(books));

      await booksModel.deleteOne({ _id: id });

      return "Item deleted successfully";
    } else {
      throw new Error("Author Not Found");
    }
  } catch (error) {
    return error.message;
  }
};

export {
  getAllBooks,
  getBookByAuthor,
  deleteBookByAuthor,
  addBook,
  getBookById,
  deleteBookById,
};
