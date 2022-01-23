const { StatusCodes } = require('http-status-codes');

const messagesModels = require('../models');

module.exports = async (req, res, _next) => {
  try {
    const allMessages = await messagesModels.findAll('messages');

    const messages = allMessages.map(({ message, nickname, timestamp }) => 
      `${timestamp} - ${nickname} diz: ${message}`);

    console.log('messages:', messages);

    return res.render('chat', { messages });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};
