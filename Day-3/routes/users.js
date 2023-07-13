import { Router } from "express";

import {
  getAllUsersController,
  getUserByIdController,
  deleteUserByIdController,
  addUserController,
  loginController,
} from "../controllers/users.js";
import { validateUsers } from "../validation/users.js";

var router = Router();

/* GET users listing. */
router.get("/", getAllUsersController);
router.get("/:id", getUserByIdController);

/* DELETE user by ID listing. */

router.delete("/:id", deleteUserByIdController);

/* ADD user by post listing. */

router.post("/", validateUsers, addUserController);
router.post("/login", loginController);

export default router;
