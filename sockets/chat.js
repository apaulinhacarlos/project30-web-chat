const moment = require('moment');
// a lib moment foi dica do Ricci

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`${socket.id} acaba de entrar`);

    socket.emit('welcome', 'Bem-vindo ao TrybeChat!');

    socket.emit('userId', `${socket.id}`); // verificar

    socket.on('message', ({ chatMessage, nickname }) => {
      const date = moment(new Date()).format('DD-MM-yyyy HH:mm:ss a');
      const msg = `${date} - ${nickname} | ${chatMessage}`;

      console.log(`${nickname} diz: ${chatMessage}`);

      io.emit('message', msg);
    });
  });
};