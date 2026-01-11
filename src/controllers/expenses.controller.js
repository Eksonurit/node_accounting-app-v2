const {
  getAll,
  getById,
  create,
  update,
  remove,
} = require('../services/expenses.service');

const get = (req, res) => {
  res.send(getAll());
};

const getOne = (req, res) => {
  const { id } = req.params;

  const expense = getById(id);

  if (!expense) {
    res.sendStatus(404);

    return;
  }
  res.send(expense);
};

const createExpense = (req, res) => {
  const { title, amount, category, note } = req.body;

  res.statusCode = 201;

  const newExpense = create({
    title,
    amount,
    category,
    note,
  });

  res.send(newExpense);
};

const updateExpense = (req, res) => {
  const { id } = req.params;
  const { title, amount, category, note } = req.body;

  const expense = getById(id);

  if (!expense) {
    res.sendStatus(404);

    return;
  }

  if (typeof title !== 'string') {
    res.sendStatus(422);

    return;
  }

  const updatedUser = update(id, {
    title,
    amount,
    category,
    note,
  });

  res.send(updatedUser);
};

const removeExpense = (req, res) => {
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
  createExpense,
  updateExpense,
  removeExpense,
};
