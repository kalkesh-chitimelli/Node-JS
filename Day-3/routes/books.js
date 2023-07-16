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
import { authenticate } from "../authentication/authentication.js";

var router = Router();

/* GET users listing. */
router.get("/", authenticate, getAllBooksController);
router.get("/author/:authorName", authenticate, getBookByAuthorController);
router.get("/:id", authenticate, getBookByIdController);

/* DELETE user by ID listing. */

router.delete("/author/:authorName", deleteBookController);
router.delete("/:id", deleteBookByIdController);

/* ADD user by post listing. */

router.post("/", validateBooks, addBookController);

export default router;
