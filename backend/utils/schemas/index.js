const joi = require('@hapi/joi');

const itemIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const itemNumberSchema = joi.number().min(0);
const itemAccumulatedSchema = joi.number().min(0);
const itemTextSchema = joi.string();
const itemInitialSchema = joi.string().max(1);
const itemFinalSchema = joi.string().max(1);
const itemCharacterSchema = joi.string().max(1);

const createNumberSchema = {
  number: itemNumberSchema.required(),
  accumulated: itemAccumulatedSchema.required()
};

const createTextSchema = {
  text: itemTextSchema.required(),
  initial: itemInitialSchema.required(),
  final: itemFinalSchema.required()
};

const createCharacterSchema = {
  character: itemCharacterSchema.required()
};

module.exports = {
  itemIdSchema,
  createNumberSchema,
  createTextSchema,
  createCharacterSchema
}