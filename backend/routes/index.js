const express = require('express');
const NumbersServices = require('../services/numbers');
const TextsServices = require('../services/texts');
const CharactersServices = require('../services/characters');
const joi = require('@hapi/joi');

const {
  createNumberSchema,
  createTextSchema,
  createCharacterSchema
} = require('../utils/schemas');

const validationHandler = require('../utils/middleware/validationHandler');
const cacheResponse = require('../utils/cacheResponse');
const {
  FIVE_MINUTES_IN_SECONDS
} = require('../utils/constants/time');

function api(app) {
  const router = express.Router();
  app.use('/api/', router);

  const numbersServices = new NumbersServices();
  const textsServices = new TextsServices();
  const charactersServices = new CharactersServices();

  // get numbers
  router.get('/numbers', async function (req, res, next) {
    cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
    
    try {
      const numbers = await numbersServices.getNumbers();
      // throw new Error("Error getting items");
      res.status(200).json({
        data: numbers,
        message: 'numbers listed'
      });
    } catch (error) {
      next(error);
    }
  });

  // create number
  router.post('/numbers', validationHandler(joi.object(createNumberSchema)), async function(
    req,
    res,
    next
  ) {
    const { body: number } = req;
    try {
      const createdItemId = await numbersServices.createNumber({ number });
      res.status(201).json({
        data: createdItemId,
        message: 'number created'
      });
    } catch (error) {
      next(error);
    }
  });

  
  // get texts
  router.get('/texts', async function (req, res, next) {
    cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
    
    try {
      const texts = await textsServices.getTexts();
      // throw new Error("Error getting items");
      res.status(200).json({
        data: texts,
        message: 'texts listed'
      });
    } catch (error) {
      next(error);
    }
  });

  // create text
  router.post('/texts', validationHandler(joi.object(createTextSchema)), async function(
    req,
    res,
    next
  ) {
    const { body: text } = req;
    try {
      const createdItemId = await textsServices.createText({ text });
      res.status(201).json({
        data: createdItemId,
        message: 'text created'
      });
    } catch (error) {
      next(error);
    }
  });

  
  // get characters
  router.get('/characters', async function (req, res, next) {
    cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
    
    try {
      const characters = await charactersServices.getCharacters();
      // throw new Error("Error getting items");
      res.status(200).json({
        data: characters,
        message: 'characters listed'
      });
    } catch (error) {
      next(error);
    }
  });

  // create character
  router.post('/characters', validationHandler(joi.object(createCharacterSchema)), async function(
    req,
    res,
    next
  ) {
    const { body: character } = req;
    try {
      const createdItemId = await charactersServices.createCharacter({ character });
      res.status(201).json({
        data: createdItemId,
        message: 'characters created'
      });
    } catch (error) {
      next(error);
    }
  });
}

module.exports = api;
