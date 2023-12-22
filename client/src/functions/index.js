const api = require('../api');
 //import { api } from '../api';
export const readTodos=async()=>{
    try {
        const{data}= await api.readTodos();
        return data;
        } catch (error) {
            console.log(error);
            }

        
};
//module.exports= readTodos;
export const createTodos=async(todo)=>{
    try {
        const{data}= await api.createTodos(todo);
        return data;
        } catch (error) {
            console.log(error);
            }

        
};
export const updateTodos=async(id,todo)=>{
    try {
        const{data}= await api.updateTodos(id,todo);
        return data;
        } catch (error) {
            console.log(error);
            }

        
};
export const deleteTodos=async(id)=>{
    try {
        await api.deleteTodos(id)
        } catch (error) {
            console.log(error);
            }

        
};
//module.exports={
    //readTodos,
   // createTodos,
//};