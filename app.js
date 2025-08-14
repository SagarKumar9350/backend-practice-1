import express, { json } from 'express';
import 'dotenv/config';
import userRouter from './routes/user.routes.js';
import todoRoutes from './routes/todo.routes.js';
import ConnectDB from './config/mongodb.js';

const port = process.env.PORT || 3000;

const app = express();

app.use(json());
app.use('/api/v1/users',userRouter);
app.use('/api/v1/todos',todoRoutes);

app.get('/',(req,res)=>{
    res.send('welcome to the home page');
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
    ConnectDB();
})