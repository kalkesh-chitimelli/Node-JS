import { Router } from "express";
import {
  getAllManagersController,
  sumOfSalariesByDepartmentController,
  maxSalaryByDepartmentController,
} from "../controllers/department.js";

var router = Router();

router.get("/allManagers", getAllManagersController);

router.get("/sumOfSalariesByDepartment", sumOfSalariesByDepartmentController);

router.get("/maxSalaryByDepartment", maxSalaryByDepartmentController);

export default router;
