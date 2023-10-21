const express = require('express');
const route = express.Router();

const todoController = require('../controller/todoController');

route.route('/')
.get(todoController.findAllTodo)
.post(todoController.createTodo)

route.route('/:id')
.get(todoController.findById)
.put(todoController.updateTodo)
.delete(todoController.deleteTodo)

module.exports = route;