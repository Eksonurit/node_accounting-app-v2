const uuidv4 = require('uuidv4');

let expenses = [
  {
    id: 0,
    userId: 0,
    spentAt: '2026-01-11T19:46:15.894Z',
    title: 'string',
    amount: 0,
    category: 'string',
    note: 'string',
  },
];
const getAll = () => {
  return expenses;
};

const getById = (id) => {
  return expenses.find(expenses.id === id) || null;
};

const create = (title, amount, category, note) => {
  const expnese = {
    id: uuidv4(),
    userId: 0,
    spentAt: new Date().toISOString(),
    title,
    amount,
    category,
    note,
  };

  expenses.push(expnese);

  return expnese;
};

const update = (id, updateData) => {
  const index = getById(id);

  expenses[index] = {
    ...expenses[index],
    ...updateData,
  };

  return expenses[index];
};

const remove = (id) => {
  expenses = expenses.filter((expense) => expense.id !== id);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
