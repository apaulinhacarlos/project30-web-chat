const connection = require('./connection');

module.exports = async (collection) => {
  const messages = (await connection()).collection(collection).find().toArray();

  return messages;
};