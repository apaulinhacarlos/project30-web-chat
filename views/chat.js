const socket = window.io();

const DATA_TESTID = 'data-testid';

  socket.on('onlineUsers', (onlineUsers) => {
    const client = onlineUsers.find(({ id }) => id === socket.id);
    const listUsers = document.getElementById('users');
    listUsers.innerHTML = '';

    const user = document.createElement('li');
    user.innerText = client.nickname;
    user.setAttribute(DATA_TESTID, 'online-user');
    user.id = 'client';
    listUsers.appendChild(user);
    
    onlineUsers.forEach(({ id, nickname }) => {
      if (id !== socket.id) {
        const newUser = document.createElement('li');
        newUser.innerText = nickname;
        newUser.setAttribute(DATA_TESTID, 'online-user');
        listUsers.appendChild(newUser);
      }
    });
  });

  const btnChangeName = document.getElementById('btn-name');
  btnChangeName.addEventListener('click', () => {
    const inputNickName = document.getElementById('input-name');
    socket.emit('onlineUsers', { id: socket.id, nickname: inputNickName.value });
    inputNickName.value = '';
  });

  socket.on('message', (msg) => {
    const chat = document.getElementById('chat');
    const newMsg = document.createElement('li');
    newMsg.innerText = msg;
    newMsg.setAttribute(DATA_TESTID, 'message');
    chat.appendChild(newMsg);
  });

  const btnSend = document.getElementById('btn-msg');
  btnSend.addEventListener('click', () => {
    const inputMessage = document.getElementById('input-msg');
    const client = document.getElementById('client').innerText;
    const nickname = client;
    const chatMessage = inputMessage.value;
    socket.emit('message', { chatMessage, nickname });
    inputMessage.value = '';
  });