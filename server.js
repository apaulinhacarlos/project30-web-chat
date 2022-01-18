const express = require('express');
// const { error } = require('./middleware');
const path = require('path');

// const socket = require('socket.io');

const PORT = process.env.PORT || 3000;

const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './public');

const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

const routes = require('./routes');

app.use(express.static(path.join(__dirname, '/public')));

require('./sockets/chat')(io);

app.use('/', routes);

// app.use(error);

http.listen(PORT, () => {
  console.log(`A mãe tá on na porta ${PORT}`);
});
