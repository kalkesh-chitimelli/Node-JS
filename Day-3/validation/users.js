import { usersSchema } from "../schema/users.js";

const validateUsers = (req, res, next) => {
  const { error } = usersSchema.validate(req.body);

  if (error) {
    return res.json(error.message);
  } else {
    next();
  }
};

export { validateUsers };
