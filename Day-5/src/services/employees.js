import { age } from "../shared/constants/commonConstants.js";
import { con } from "../shared/constants/connection.js";
import { getOffset } from "../shared/constants/helper.js";

export const getAllEmployeesService = async () => {
  try {
    const employees = await con.query(
      `SELECT * FROM employees ORDER BY ${age} ASC, hire_date DESC`
    );
    if (!employees[0]) {
      throw new Error("No Record Found");
    } else {
      return employees[0];
    }
  } catch (error) {
    return error.message;
  }
};

export const getEmployeesByAgeService = async () => {
  try {
    const employees = await con.query(
      `select concat_ws(' ',first_name,last_name) as emp_name,salary from (employees e,salaries s) where (e.emp_no = s.emp_no) AND (${age} between 30 AND 40))`
    );
    if (!employees[0]) {
      throw new Error("No Record Found");
    } else {
      return employees[0];
    }
  } catch (error) {
    return error.message;
  }
};

export const getEmployeeByIdService = async (id) => {
  try {
    const employee = await con.query(
      `select * from employees where emp_no = ${id}`
    );
    if (!employee[0]) {
      throw new Error("No Record Found");
    } else {
      return employee[0];
    }
  } catch (error) {
    return error.messgae;
  }
};

export const getEmployeePaginationService = async (page = 1) => {
  try {
    const recordsPerPage = 4;
    const offset = getOffset(page, recordsPerPage);
    const employees =
      await con.query(`select concat_ws(' ',first_name,last_name) as emloyee_name, dept_name as department_name , TIMESTAMPDIFF(YEAR, birth_date, CURDATE()) as Age, title as employee_title from employees e
                join dept_emp de on e.emp_no = de.emp_no
                join departments d on de.dept_no = d.dept_no
                join titles t on t.emp_no = e.emp_no
                order by Age LIMIT ${offset},${recordsPerPage}`);

    if (!employees[0]) {
      throw new Error("No Record Found");
    } else {
      return employees[0];
    }
  } catch (error) {
    return error.message;
  }
};
