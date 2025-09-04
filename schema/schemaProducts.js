const Joi = require("joi");

const id = Joi.number().integer();
const name = Joi.string().alphanum().min(3).max(10);
const price = Joi.number().integer();
const details = Joi.string().min(10);
const categoryId = Joi.number().integer();

const createProductSchema = Joi.object({
    name: name.required(),
    price: price.required(),
    description: details.required(),
    categoryId: categoryId.required(),
});

const updateProductSchema = Joi.object({
    name: name.required(),
    price: price.required(),
    details: details,
    categoryId: categoryId,
});

const getProductSchema = Joi.object({
    id: id.required(),
});

module.exports = {
    createProductSchema,
    updateProductSchema,
    getProductSchema
};