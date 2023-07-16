import {
  getAllManagersService,
  sumOfSalariesByDepartmentService,
  maxSalaryByDepartmentService,
} from "../services/department.js";

export const getAllManagersController = async (req, res) => {
  const managers = await getAllManagersService();
  res.send(managers);
};

export const sumOfSalariesByDepartmentController = async (req, res) => {
  const salaries = await sumOfSalariesByDepartmentService();
  res.send(salaries);
};

export const maxSalaryByDepartmentController = async (req, res) => {
  const maxSalary = await maxSalaryByDepartmentService();
  res.send(maxSalary);
};
