const connection = require('./connection');

module.exports = async (collection, doc) => {
  const messages = (await connection()).collection(collection).insertOne(doc);

  return messages;
};