import { booksSchema } from "../schema/books.js";

const validate = (req, res, next) => {
  const { error } = booksSchema.validate(req.body);

  if (error) {
    return res.json(error.message);
  } else {
    next();
  }
};

export { validate };
