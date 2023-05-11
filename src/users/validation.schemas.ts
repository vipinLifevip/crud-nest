import * as Joi from '@hapi/joi';

export const createUserSchema = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().required(),
});

export const updateUserSchema = Joi.object({
    name: Joi.string(),
    email: Joi.string().email(),
    password: Joi.string().min(6),
});
