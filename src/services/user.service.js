const { v4: uuidv4 } = require('uuid/dist/v4');

let users = [
  {
    id: 0,
    name: 'string',
  },
];

const getAll = () => {
  return users;
};

const getById = (id) => {
  return users.find(users.id === id) || null;
};

const create = (name) => {
  const user = {
    id: uuidv4(),
    name,
  };

  users.push(user);

  return user;
};

const update = ({ id, name }) => {
  const user = getById(id);

  Object.assign(user, { id, name });

  return user;
};

const remove = (id) => {
  users = users.filter((user) => user.id !== id);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
