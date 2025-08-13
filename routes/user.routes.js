import { Router } from "express";

const userRouter = Router();

userRouter.get('/',(req,res)=>{
    res.send('users details')
})
userRouter.get('/:id',(req,res)=>{
    res.send('user details')
})
userRouter.post('/',(req,res)=>{
    res.send('users updated')
})
userRouter.delete('/:id',(req,res)=>{
    res.send('user deleted')
})


export default userRouter;