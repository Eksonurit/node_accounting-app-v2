const {
  getAll,
  getById,
  create,
  update,
  remove,
} = require('../services/user.service');

const get = (req, res) => {
  res.send(getAll());
};

const getOne = (req, res) => {
  const { id } = req.params;

  const user = getById(id);

  if (!user) {
    res.sendStatus(404);

    return;
  }
  res.send(user);
};

const createUser = (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.sendStatus(422);
  }

  const user = create(name);

  res.statusCode = 201;
  res.send(user);
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const user = getById(id);

  if (!user) {
    res.sendStatus(404);

    return;
  }

  if (typeof name !== 'string') {
    res.sendStatus(422);

    return;
  }

  const updatedUser = update(id, name);

  res.send(updatedUser);
};

const removeUser = (req, res) => {
  const { id } = req.params;

  if (!getById(id)) {
    res.sendStatus(404);

    return;
  }

  remove(id);

  res.sendStatus(204);
};

module.exports = {
  get,
  getOne,
  createUser,
  updateUser,
  removeUser,
};
