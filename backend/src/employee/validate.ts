import Joi from "joi";

export const createEmploeeSchema = Joi.object({
    firstName: Joi.string().trim().required(),
    lastName: Joi.string().trim().required(),
    email: Joi.string().trim().email().max(100).required(),
    mobileNumber: Joi.string().trim().required(),
    address: Joi.string().trim().required(),
    dateOfBirth: Joi.string().isoDate().required(),
    hireDate: Joi.string().isoDate().required(),
    department: Joi.string().trim().required(),
    description: Joi.string().trim().optional()
});