import { getUsers } from "../db.js";

export const getAllUsers = async () => {
  const users = getUsers();
  return users;
};
