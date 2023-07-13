import {
  getAllUsers,
  getUserById,
  deleteUserById,
  addUser,
  login,
} from "../services/users.js";

const getAllUsersController = async (req, res) => {
  const allUsers = await getAllUsers();
  res.send(allUsers);
};

const getUserByIdController = async (req, res) => {
  const { id } = req.params;

  const userById = await getUserById(id);
  res.send(userById);
};

const deleteUserByIdController = async (req, res) => {
  const { id } = req.params;

  const deleteUserId = await deleteUserById(id);
  res.send(deleteUserId);
};

const addUserController = async (req, res) => {
  const addNewUser = await addUser(req.body);

  res.send(addNewUser);
};

const loginController = async (req, res) => {
  const loginUser = await login(req.body);

  res.send(loginUser);
};

export {
  getAllUsersController,
  getUserByIdController,
  deleteUserByIdController,
  addUserController,
  loginController,
};
