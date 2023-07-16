import { con } from "../shared/constants/connection.js";

export const getAllManagersService = async () => {
  try {
    const managers = await con.query(
      `select concat_ws(' ',first_name,last_name) as manager_name,gender as manager_gender, dept_name as department_name, salary from ((employees e inner join (dept_manager dm inner join departments d on dm.dept_no = d.dept_no) on e.emp_no = dm.emp_no)inner join salaries s on e.emp_no = s.emp_no)`
    );
    if (!managers[0]) {
      throw new Error("No Record Found");
    } else {
      return managers[0];
    }
  } catch (error) {
    return error.message;
  }
};

export const sumOfSalariesByDepartmentService = async () => {
  try {
    const salaries = await con.query(
      `select sum(salary) as total_salary, dept_name as department_name from salaries s, (dept_emp de inner join departments d on de.dept_no = d.dept_no  )where s.emp_no = de.emp_no group by de.dept_no`
    );
    if (!salaries[0]) {
      throw new Error("No Record Found");
    } else {
      return salaries[0];
    }
  } catch (error) {
    return error.message;
  }
};

export const maxSalaryByDepartmentService = async () => {
  try {
    const maxSalary =
      await con.query(`select department_name,emloyee_name,max(salary) as max_salary from (select dept_name as department_name, concat_ws(' ',first_name,last_name) as emloyee_name, salary from employees e
    join dept_emp de on e.emp_no = de.emp_no
    join departments d on de.dept_no = d.dept_no
    join salaries s on e.emp_no = s.emp_no ) as f
    group by department_name`);
    if (!maxSalary[0]) {
      throw new Error("No Record Found");
    } else {
      return maxSalary[0];
    }
  } catch (error) {
    return error.message;
  }
};
