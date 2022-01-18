module.exports = (io) => io.on('connection', (socket) => {
  // envia uma mensagem apenas para o cliente que disparou o evento
  socket.emit('serverMessage', 'Olá, seja bem vindo ao nosso chat público! Use essa página para conversar a vontade.');
  
  // envia uma mensagem para todos os outros clientes, exceto para quem disparou um evento
  socket.broadcast.emit('serverMessage', `Iiiiiirraaaa! ${socket.id} acabou de se conectar :D`);

  // escuta um evento qualquer
  socket.on('clientMessage', (message) => {
    console.log(`Mensagem ${message}`);
    io.emit('serverMessage', message); // do server para todos os sockets
  });
  
  // escuta o evento disparado quando um usuário se desconecta.
  socket.on('disconnect', () => {
    socket.broadcast.emit('serverMessage', `Xiii! ${socket.id} acabou de se desconectar! :(`);
  });
});