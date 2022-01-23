const users = [];

const addUser = ({ id, name, game }) => {
    name = name.trim().toLowerCase();
    game = game.trim().toUpperCase();

    const user = { id, name, game };
    const existingUser = users.find((user) => user.game === game && user.name === name);

    return existingUser ? { error: 'Username is taken' } : { user };
};

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);

    if (index !== -1) return users.splice(index, 1)[0];
};

const getUserById = (id) => users.find((user) => user.id === id);

const getAllUsersInGame = (game) => users.filter((user) => user.game === game);

module.exports = {
  addUser,
  getAllUsersInGame,
  getUserById,
  removeUser,
  users
};