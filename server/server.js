const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const router = require('./router');
const { addUser, users } = require('./users.js');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log('Listening on: http://localhost:' + PORT));

const joinGame = (socket) => {
  socket.on('join', ({ name, game }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, game });
    users.push(user);

    if (error) return callback(error);

    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the game!` });
    socket.broadcast.to(user.game).emit('message', { user: 'admin', text: `${user.name} has joined the game!`});
    socket.join(user.game);

    callback();
  });
}

io.on('connection', (socket) => {
  joinGame(socket);
  socket.emit('roomData', { users });
  socket.on('disconnect', () => console.log('User disconnected'));
});

module.exports = app;
