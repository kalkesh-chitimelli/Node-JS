import {
  getAllEmployeesService,
  getEmployeesByAgeService,
  getEmployeeByIdService,
  getEmployeePaginationService,
} from "../services/employees.js";

export const getAllEmployeesController = async (req, res) => {
  const employees = await getAllEmployeesService();
  res.send(employees);
};

export const getEmployeesByAgeController = async (req, res) => {
  const employees = await getEmployeesByAgeService();
  res.send(employees);
};

export const getEmployeeByIdController = async (req, res) => {
  const { id } = req.params;
  const employee = await getEmployeeByIdService(id);
  res.send(employee);
};

export const getEmployeePaginationController = async (req, res, next) => {
  const employees = await getEmployeePaginationService(req.query.page);
  res.send(employees);
};
