const socket = window.io();

let nick = '';

socket.on('setUser', (content) => {
  nick = content;
});

// const form = document.querySelector('form');
// const inputMessage = document.querySelector('#messageInput');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   socket.emit('clientMessage', inputMessage.value); 
//   inputMessage.value = '';
//   return false;
// });

// const createMessage = (message) => {
//   const messagesUl = document.querySelector('#messages');
//   const li = document.createElement('li');
//   li.innerText = message;
//   messagesUl.appendChild(li);
// };

// socket.on('serverMessage', (message) => createMessage(message));

// window.onload = () => {
  // setNicknameEvent();
  // setMessageEvent();
// };

window.onbeforeunload = () => {
  socket.disconnect();
};