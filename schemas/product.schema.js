
const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().alphanumeric().min(3).max(20);
const price = Joi.integer().min(10);


const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema}
