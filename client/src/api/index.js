import axios from 'axios';
const url ="http://localhost:8000/todos";
export const readTodos=()=>axios.get(url);
export const createTodos=newTodo=> axios.post(url,newTodo);
export const updateTodos=(id,updateTodo)=>axios.patch(`${url}/${id}`,updateTodo);
export const deleteTodos=(id)=>axios.delete(`${url}/${id}`);