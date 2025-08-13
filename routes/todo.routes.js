import { Router } from "express";

const todoRoutes = Router();


todoRoutes.get('/',(req,res)=>{
    res.send({data:'this is the value of todos'});
})
todoRoutes.get('/:id',(req,res)=>{
    res.send('todo details');
})
todoRoutes.post('/',(req,res)=>{
    res.send('todo created');
})
todoRoutes.put('/:id',(req,res)=>{
    res.send('todo updated');
})
todoRoutes.delete('/:id',(req,res)=>{
    res.send('todo deleted');
})

export default todoRoutes;