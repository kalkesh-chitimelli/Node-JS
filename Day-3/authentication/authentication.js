import jwt from "jsonwebtoken";
import createError from "http-errors";

export const authenticate = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET_CODE);
    next();
  } catch (error) {
    next(createError(403, new Error("Not Authorized")));
  }
};
