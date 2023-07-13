import { usersModel } from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const getAllUsers = async () => {
  try {
    const users = await usersModel.find().lean();
    return users;
  } catch (error) {
    return error.message;
  }
};

const getUserById = async (id) => {
  try {
    const userById = await usersModel.findById(id);
    return userById;
  } catch (error) {
    return error.message;
  }
};

const deleteUserById = async (id) => {
  try {
    const userById = await usersModel.findById(id);

    if (userById) {
      await usersModel.deleteOne({ _id: id });
      return "User Deleted Successfully";
    } else {
      throw new Error("User Not Found");
    }
  } catch (error) {
    return error.message;
  }
};

const addUser = async (data) => {
  try {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const userFieldsSet = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: hashedPassword,
    };

    const newUser = await usersModel.create(userFieldsSet);

    if (newUser) {
      return newUser;
    } else {
      throw new Error("User can not created ");
    }
  } catch (error) {
    return error.message;
  }
};

const login = async (data) => {
  try {
    const user = await usersModel.findOne({ email: data.email });
    if (!user) {
      throw new Error("Email or Password is not valid");
    }

    const isPasswordCorrect = await bcrypt.compare(
      data.password,
      user.password
    );
    if (!isPasswordCorrect) {
      throw new Error("Email or Password is not valid");
    }
    const mySecretKey = process.env.SECRET_CODE;
    console.log(mySecretKey);

    const payLoad = {
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.password,
    };

    const jwtToken = jwt.sign(payLoad, mySecretKey);
    return { token: jwtToken, message: "Logged In " };
  } catch (error) {
    return error.message;
  }
};

export { getAllUsers, getUserById, deleteUserById, addUser, login };
