import mongoose from "mongoose";
const connectionString = process.env.MONGODB_URI

const ConnectDB = async()=>{
    try {
        await mongoose.connect(connectionString)
            .then(()=> console.log("MONGODB connected !!"))
    } catch (error) {
        console.error(error.message);
    }
    
}

export default ConnectDB;