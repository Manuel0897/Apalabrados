const MongoLib = require('../lib/mongo');

class CharactersService {
  constructor() {
    this.collection = 'characters';
    this.mongoDB = new MongoLib();
  }
  async getCharacters() {
    const characters = await this.mongoDB.getAll(this.collection);
    return characters || [];
  }

  async createCharacter({ character }) {
    const createCharacterId = await this.mongoDB.create(this.collection, character)
    return createCharacterId || {};
  }
}

module.exports = CharactersService;

