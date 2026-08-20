import Joi from "joi";

export const createContractSchema = Joi.object({
    contractType: Joi.required(),
    title: Joi.string().trim().required(),
    salary: Joi.number().required(),
    startDate: Joi.string().isoDate().required(),
    endDate: Joi.string().isoDate().required(),
    weeklyHours: Joi.number().required(),
});