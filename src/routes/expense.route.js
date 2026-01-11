const express = require('express');
const {
  get,
  getOne,
  createExpense,
  updateExpense,
  removeExpense,
} = require('../controllers/expenses.controller');

const expenseRouter = express.Router();

expenseRouter.get('/', get);

expenseRouter.get('/:id', getOne);

expenseRouter.post('/', express.json(), createExpense);

expenseRouter.put('/:id', express.json(), updateExpense);

expenseRouter.delete('/:id', removeExpense);

module.exports = {
  expenseRouter,
};
