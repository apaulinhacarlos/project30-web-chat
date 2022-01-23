const moment = require('moment');
const messagesModels = require('../models');

let onlineUsers = [];

module.exports = (io) => {
  io.on('connection', (socket) => {
    onlineUsers.push({ id: socket.id, nickname: socket.id.slice(0, 16) });
    io.emit('onlineUsers', onlineUsers);

    socket.on('message', async ({ chatMessage, nickname }) => {
      const date = moment(new Date()).format('DD-MM-yyyy HH:mm:ss a');
      await messagesModels.create('messages', { message: chatMessage, nickname, timestamp: date });
      io.emit('message', `${date} - ${nickname} diz: ${chatMessage}`);
    });

    socket.on('onlineUsers', (newNick) => {
      const index = onlineUsers.findIndex(({ id }) => id === newNick.id);
      onlineUsers[index] = newNick;
      io.emit('onlineUsers', onlineUsers);
    });

    socket.on('disconnect', () => {
      onlineUsers = onlineUsers.filter(({ id }) => id !== socket.id);
      io.emit('onlineUsers', onlineUsers);
    });
  });
};