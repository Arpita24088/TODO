const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const todosRoutes = require('./routes/todos.js');
const app = express();
dotenv.config();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/todos', todosRoutes);


const mongodb = process.env.MONGODB_URI || "mongodb://localhost:27017/todo_express";

app.get('/', (req, res) => {
    res.send('Welcome to the server');
});

const PORT = process.env.PORT || 8000;

mongoose.connect(mongodb, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => console.log(err));
