import { type CreateEmployeeDto } from './../types/Employee';
import Joi from 'joi';
export const employeeSchema = Joi.object<CreateEmployeeDto>({
    firstName: Joi.string().trim().required().messages({
    "string.empty": "First name is required.",
    }),
    lastName: Joi.string().trim().required().messages({
        "string.empty": "Last name is required.",
    }),
    email: Joi.string()
        .trim()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
        "string.empty": "Email is required.",
        "string.email": "Please enter a valid email address.",
        }),
    dateOfBirth: Joi.string().allow("").optional(),
    hireDate: Joi.string().allow("").optional(),
    mobileNumber: Joi.string()
    .trim()
    .pattern(/^\+44\d{9,10}$/)
    .required()
    .messages({
      "string.empty": "Mobile number is required.",
      "string.pattern.base": "Mobile number must start with +44 and contain valid digits.",
    }),
  address: Joi.string()
    .trim()
    .required()
    .messages({
      "string.empty": "Address is required.",
    }),
  department: Joi.string()
    .trim()
    .required()
    .messages({
      "string.empty": "Department is required.",
    }),
  description: Joi.string()
    .trim()
    .required()
    .messages({
      "string.empty": "Description is required.",
    }),
})