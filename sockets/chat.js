const moment = require('moment');
// a lib moment foi dica do Ricci

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`${socket.id} acaba de entrar`);

    socket.on('message', ({ chatMessage, nickname }) => {
      console.log(`chatMsg: ${chatMessage} | user: ${nickname}`);

      const date = moment(new Date()).format('DD-MM-yyyy HH:mm:ss a');
      const msg = `${date} - ${nickname} ${chatMessage}`;

      io.emit('message', msg);
    });
  });
};