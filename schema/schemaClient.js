const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const lastName = Joi.string();
const phone =  Joi.string();
const userId = Joi.number().integer()
const email = Joi.string().email();
const password = Joi.string();

const getClientSchema = Joi.object({
  id: id.required(),
});

const createClientSchema = Joi.object({
  name: Joi.string().required(),
  lastName: Joi.string().required(),
  phone: Joi.string().required(),
  userId: Joi.number().integer().required(),
});

const updateClientSchema = Joi.object({
  name,
  lastName,
  phone,
  userId
});

module.exports = { getClientSchema, createClientSchema, updateClientSchema };
