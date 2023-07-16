import { Router } from "express";
import {
  getAllEmployeesController,
  getEmployeesByAgeController,
  getEmployeeByIdController,
  getEmployeePaginationController,
} from "../controllers/employees.js";

var router = Router();

router.get("/allEmployees", getAllEmployeesController);
router.get("/employeesByAge", getEmployeesByAgeController);
router.get("/employeeById/:id", getEmployeeByIdController);
router.get("/employeePagination", getEmployeePaginationController);

export default router;
