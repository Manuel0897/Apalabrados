const MongoLib = require('../lib/mongo');

class TextsService {
  constructor() {
    this.collection = 'texts';
    this.mongoDB = new MongoLib();
  }
  async getTexts() {
    const texts = await this.mongoDB.getAll(this.collection);
    return texts || [];
  }

  async createText({ text }) {
    const createTextId = await this.mongoDB.create(this.collection, text)
    return createTextId || {};
  }
}

module.exports = TextsService;

