const MongoLib = require('../lib/mongo');

class NumbersService {
  constructor() {
    this.collection = 'numbers';
    this.mongoDB = new MongoLib();
  }
  async getNumbers() {
    const numbers = await this.mongoDB.getAll(this.collection);
    return numbers || [];
  }

  async createNumber({ number }) {
    const createNumberId = await this.mongoDB.create(this.collection, number)
    return createNumberId || {};
  }
}

module.exports = NumbersService;

