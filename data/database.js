import mongoose from "mongoose";

export const connectDB = ()=>{
    mongoose.
    connect(process.env.MONGO_URI,{
       dbName : "todo"
    }).
    then((c)=>console.log(`DataBase Connected with ${c.connection.host}`)).
    catch((e)=>console.log(e));
}