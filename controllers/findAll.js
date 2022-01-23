const { StatusCodes } = require('http-status-codes');
const moment = require('moment');

const messagesModels = require('../models');

module.exports = async (req, res, _next) => {
  try {
    const allMessages = await messagesModels.findAll('messages');

    const messages = allMessages.map(({ message, nickname, timestamp }) => {
      const date = moment(new Date(timestamp)).format('DD-MM-YYYY h:mm a');
      return `${date} - ${nickname} ${message}`;
    });

    console.log('messages:', messages);

    return res.render('chat', { messages });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};
