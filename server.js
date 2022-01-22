const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

require('./sockets/chat')(io);

http.listen(PORT, () => {
  console.log(`A mãe tá on na porta ${PORT}`);
});
