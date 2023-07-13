import Joi from "joi";

const usersSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string(),
  email: Joi.string(),
  password: Joi.string(),
});

export { usersSchema };
