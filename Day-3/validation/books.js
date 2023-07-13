import { booksSchema } from "../schema/books.js";

const validateBooks = (req, res, next) => {
  const { error } = booksSchema.validate(req.body);

  if (error) {
    return res.json(error.message);
  } else {
    next();
  }
};

export { validateBooks };
