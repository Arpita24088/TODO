const mongoose = require('mongoose');
const Todo = require('../models/todos.js');

const readTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const createTodos = async (req, res) => {
  const todo = new Todo(req.body);

  try {
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};
const updateTodos = async (req, res) => {
  const { id } = req.params;
  const {title,content}=req.body;
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).send(`No todo with id: ${id}`);
  }
  const todo ={title,content,_id:id};
  await Todo.findByIdAndUpdate(id,todo,{new:true})
  res.json(todo);
}
const deleteTodos = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).send(`No todo with id: ${id}`);
  }
  
  await Todo.findByIdAndDelete(id);
  res.json({message:"deleted succesfully"});
}

module.exports = {
  readTodos,
  createTodos,
  updateTodos,
  deleteTodos,
};
