const moment = require('moment');
const messagesModels = require('../models');

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`${socket.id} acaba de entrar`);

    socket.emit('welcome', 'Bem-vindo ao TrybeChat!');

    socket.emit('userId', `${socket.id}`);

    socket.on('message', async ({ chatMessage, nickname }) => {
      const messageDB = {
        message: chatMessage,
        nickname,
        timestamp: moment(new Date()).format('DD-MM-yyyy HH:mm:ss a'),
      };

      await messagesModels.create('messages', messageDB);

      const date = moment(new Date()).format('DD-MM-yyyy HH:mm:ss a');
      const msg = `${date} - ${nickname} diz: ${chatMessage}`;

      console.log(`${nickname} diz: ${chatMessage}`);

      io.emit('message', msg);
    });
  });
};