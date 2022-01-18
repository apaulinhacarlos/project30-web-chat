const { StatusCodes } = require('http-status-codes');
// const chatModels = require('../../models/chat');

module.exports = async (_req, res, _next) => {
  console.log('controller');
  // const teste = await chatModels.getAll();
  
  return res.status(StatusCodes.OK).render('../public/index');
};