const express = require('express');
const router = express.Router();
const { createTodos,readTodos, updateTodos, deleteTodos } = require('../controller/todos.js');
router.get('/', readTodos);
router.post('/', createTodos);
router.patch('/:id', updateTodos);
router.delete('/:id',deleteTodos);

module.exports= router;