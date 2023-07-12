import { Router } from "express";

import {
  getAllBooksController,
  getBookByAuthorController,
  deleteBookController,
  addBookController,
} from "../controllers/books.js";
import { validate } from "../validation/books.js";

var router = Router();

/* GET users listing. */
router.get("/", getAllBooksController);
router.get("/:authorName", getBookByAuthorController);

/* DELETE user by ID listing. */

router.delete("/:authorName", deleteBookController);

/* ADD user by post listing. */

router.post("/", validate, addBookController);

export default router;
