import { Router } from "express";

import {
  getAllBooksController,
  getBookByAuthorController,
  deleteBookController,
  addBookController,
  getBookByIdController,
  deleteBookByIdController,
} from "../controllers/books.js";
import { validateBooks } from "../validation/books.js";

var router = Router();

/* GET users listing. */
router.get("/", getAllBooksController);
router.get("/author/:authorName", getBookByAuthorController);
router.get("/:id", getBookByIdController);

/* DELETE user by ID listing. */

router.delete("/:authorName", deleteBookController);
router.delete("/author/:id", deleteBookByIdController);

/* ADD user by post listing. */

router.post("/", validateBooks, addBookController);

export default router;
