import mongoose from "mongoose";

const booksSchema = new mongoose.Schema(
  {
    author: { type: String, required: true },
    country: { type: String, required: true },
    imageLink: { type: String, required: true },
    language: { type: String, required: true },
    link: { type: String, required: true },
    pages: { type: Number, required: true },
    title: { type: String, required: true },
    year: { type: Number, required: true },
  },
  { collection: "books" }
);

const booksModel = mongoose.model("books", booksSchema);

export { booksSchema, booksModel };
