const connection = require('./connection');

module.exports = async (collection, doc) => 
  (await connection()).collection(collection).insertOne(doc);